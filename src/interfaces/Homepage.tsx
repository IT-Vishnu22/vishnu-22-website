import { StaticImageData } from "next/image";

export interface NewsHomepage {
    title?: string;
    description?: string;
    image: StaticImageData;
}