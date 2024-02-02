"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { ProjectsCardType } from "@/data/projects";

import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import { ReactElement } from "react";

interface ProjectsCardProps extends ProjectsCardType {
    customFields?: JSX.Element;
}

function titleElement(
    active: boolean,
    href: string | undefined,
    title: string
) {
    return active && href ? (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold hover:underline hover:cursor-pointer relative inline-flex items-center transition-transform duration-300 ease-in-out"
        >
            {title}
            <ArrowTopRightIcon className="inline-block ml-1 h-5 w-5" />
        </Link>
    ) : (
        <div className="">{title}</div>
    );
}

function repoElement(
    repo_link: string | undefined,
    icon: ReactElement | undefined
) {
    return (
        repo_link && (
            <Link href={repo_link} target="_blank" passHref>
                {icon}
            </Link>
        )
    );
}

export default function ProjectsCard({
    title,
    description,
    active,
    href,
    repo_link,
    icon,
    date,
    badges,
    customFields,
}: ProjectsCardProps) {
    return (
        <Card className="flex flex-col backdrop-blur-sm ">
            <CardHeader className=" pb-3">
                <CardTitle>
                    <div className="text-xl flex flex-row justify-between items-center">
                        {titleElement(active, href, title)}
                        {repoElement(repo_link, icon)}
                    </div>
                </CardTitle>
                <CardDescription>
                    <div className="text-sm font-normal	text-muted-foreground subpixel-antialiased ">
                        {date}
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent className=" font-light text-sm	pb-5 text-justify mb-auto">
                {description}
                {customFields}
            </CardContent>

            {(badges?.length ?? 0) > 0 && (
                <CardFooter className={`pb-4 mt-auto `}>
                    <div className=" flex flex-row flex-wrap gap-1">
                        {badges?.map((badge, index) => (
                            <Badge key={index} className="mr-2 mb-2">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                </CardFooter>
            )}
        </Card>
    );
}
