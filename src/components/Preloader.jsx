import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";

export async function loader() {
    return ( < div
        id = "preloader"
        style = {{
            background: "#fff",
                height: "100%",
                    left: 0,
                        opacity: 1,
                            position: "fixed",
                                display: "flex",
                                    alignItems: "center",
                                        justifyContent: "center",
                                            top: 0,
                                                width: "100%",
                                                    zIndex: 999999999,
                                                        overflowX: "hidden !important"}}
        >
        <div
            className="preloader"
            style={{ display: "flex", alignItem: "center", justifyContent: "center" }}
        >
            <img
                src="assets/images/preloader/preloader.gif"
                style={{ width: "40%" }}
                alt="Pre-loader"
            />
        </div> 
            </div > );
  }