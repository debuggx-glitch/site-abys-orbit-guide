import type {Metadata} from "next";
import Link from "next/link";
import {Telemetry} from "@/components/telemetry";
import release from "@/config/release.json";
import {site} from "@/lib/site";
import {SiteStructuredData} from "@/components/structured-data";
import "./globals.css";
import "./responsive.css";

export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:site.homeTitle,template:`%s | ${site.name}`},description:site.description,robots:{index:release.allowIndexing,follow:release.allowIndexing},openGraph:{type:"website",siteName:site.name,title:site.homeTitle,description:site.description,images:[site.visual]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={site.theme}><SiteStructuredData/><header className="orbit-header"><Link className="orbit-brand" href="/"><span>AO</span><b>ABYS / ORBIT</b></Link><nav><Link href="/">Mission DB</Link><Link href="/about/">Protocol</Link></nav><div className="orbit-status"><i/> Uplink stable</div></header>{children}<footer className="orbit-footer"><p><b>ABYS / ORBIT GUIDE</b> · Independent player intelligence. Not affiliated with the developer or platform.</p><nav><Link href="/about/">Protocol</Link><Link href="/privacy/">Privacy</Link><Link href="/contact/">Contact</Link></nav></footer><Telemetry/></body></html>}
