"use client"
import React from 'react'
import styles from "./style.module.css"
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import Chart from "chart.js";
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import Link from 'next/link';
const Admin = () => {
    const BlogsDateData = useQuery(api.blog.CollectBlog);
    const supportRequests = useQuery(api.support.getsupport);
    const supportRequestsMonths = Array(12).fill(0)
    const BlogMonths = Array(12).fill(0);
    const chartContainer = React.useRef(null);

    // Iterate over BlogsDateData and update BlogMonths
    BlogsDateData?.forEach(blogs => {
        const monthIndex = new Date(blogs._creationTime).getMonth();
        BlogMonths[monthIndex]++;
    });
    supportRequests?.forEach(request => {
        const monthIndex = new Date(request._creationTime).getMonth();
        supportRequestsMonths[monthIndex]++;
    });

    React.useEffect(() => {
        var config = {
            type: "line",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ],
                datasets: [
                    {
                        label: "User Login",
                        backgroundColor: "#3182ce",
                        borderColor: "#3182ce",
                        data: BlogMonths,
                        fill: false,
                    },
                    {
                        label: "Support Requests",
                        fill: false,
                        backgroundColor: "#edf2f7",
                        borderColor: "#edf2f7",
                        data: supportRequestsMonths,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "admin data",
                    fontColor: "white",
                },
                legend: {
                    labels: {
                        fontColor: "white",
                    },
                    align: "end",
                    position: "bottom",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Month",
                                fontColor: "white",
                            },
                            gridLines: {
                                display: false,
                                borderDash: [4],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(0, 0, 0, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                                fontColor: "white",
                            },
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: "rgba(255, 255, 255, 0.15)",
                                zeroLineColor: "rgba(33, 37, 41, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        var ctx = document.getElementById("line-chart").getContext("2d");
        window.myLine = new Chart(ctx, config);
        const data = {
            labels: ['ADHD', 'Autism',],
            datasets: [{
                label: 'Sample Data',
                data: [12, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            }],
        };

        // const configx = {
        //     type: 'pie',
        //     data: data,
        //     options: {
        //         responsive: true,
        //         plugins: {
        //             legend: {
        //                 position: 'top',
        //             },
        //             title: {
        //                 display: true,
        //                 text: 'Sample Pie Chart',
        //             },
        //         },
        //     },
        // };

        // const chartInstance = new Chart(chartContainer.current, configx);

        // return () => chartInstance.destroy();
    }, [BlogMonths, supportRequestsMonths]);
    const Email = process.env.NEXT_PUBLIC_ADMIN_CREDENTIAL;
    const { user, error, isLoading } = useUser();
    const router = useRouter();
    return (
        <div className={styles.adminmain} >
            <span>
                <h2>
                    {/* Welcome {user.name} */}
                    Welcome <span> {!isLoading ? user.name : ""}</span>

                </h2>
            </span>
            <br />
            <div className={styles.main}>
                <h4 className={styles.barhead}>
                    Usage Analytics
                </h4>
                <br />
                <div className={styles.bar}>

                    <div >
                        <canvas id="line-chart"></canvas>
                    </div>
                </div>
                {/* <div className={styles.piedata} >
                    <h4>
                        User Type
                    </h4>
                    <div>
                        <canvas ref={chartContainer} width="100" height="100"></canvas>
                    </div>

                </div> */}
            </div>
            <div className={styles.main}>
                <h2>Top Support Queries</h2>
                <div className={styles.supportquesry}>
                    {supportRequests?.map((data, index) => (
                        <div className={styles.SupportPoints} key={data._id}>
                            <h4>{index + 1}. Name: {data.FirstName}</h4>
                            {/* <p>Date: {new Date(data._creationTime).toLocaleDateString()}</p> */}
                            <p>Desc: {`${data.Description.substring(0, 20)}...`}</p>
                            <button>
                                <Link href={"mailto:" + data.Email}>
                                    Reply To mail
                                </Link>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Admin