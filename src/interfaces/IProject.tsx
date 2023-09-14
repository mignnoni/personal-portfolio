import { ReactNode } from "react";

export interface IProject {
    paragraphs: string[];
    name: string;
    period: string;
    tags: string[];
    videoRef?: string | null;
    images?: string[] | null;
}

export interface IProjectProps {
    children: ReactNode;
    name: string;
    period: string;
    tags: string[];
    videoRef?: string | null;
    images?: string[] | null;
}