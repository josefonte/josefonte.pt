import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import ButtonsNav from "@/components/me/buttons-nav";
import Navbar from "@/components/me/navbar";
import ProfileInfo from "@/components/me/nav-ProfileInfo";

import { HeartFilledIcon } from "@radix-ui/react-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "josefonte",
    description: "Create a CV with Next.js and Tailwind CSS",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {" "}
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="min-h-[100vh]">
                        <div className="flex-col ">
                            <div className=" flex justify-end ">
                                <ButtonsNav />
                            </div>
                            <div className="lg:mx-[25%] mb-10 ">
                                <ProfileInfo />
                            </div>
                            <div className="mx-[10%] md:mx-[15%] lg:mx-[20%] sticky top-0  mt-3 ">
                                <Navbar />
                            </div>
                        </div>

                        <div className="mx-[10%] md:mx-[15%] lg:mx-[20%] mt-3 ">
                            {children}
                        </div>
                    </div>
                    <div className="text-sm text-center my-5 inset-x-0 bottom-0 ">
                        Made with <HeartFilledIcon className="inline-block" />{" "}
                        by{" "}
                        <a
                            href="https://github.com/josefonte/minimalist-cvs/"
                            target="_blank"
                            className="inline-block hover:underline"
                        >
                            José Fonte
                        </a>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
