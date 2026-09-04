import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {HomeAd} from "@/components/ad-placements";
import {guides} from "@/lib/guides";
import {site} from "@/lib/site";

export const metadata:Metadata={alternates:{canonical:"/"}};
export default function Home(){return <main className="orbit-console">
  <HomeAd/>
  <section className="bridge"><div className="bridge-visual"><Image src={site.visual} width={site.visualWidth} height={site.visualHeight} sizes="100vw" priority alt={site.visualAlt}/><div className="scan-lines"/><p>Live navigation image · verify current mission state in game</p></div><div className="bridge-copy"><p className="system-label">Abys navigation network / Online</p><h1>Plot the mission.<br/><span>Upgrade the bottleneck.</span></h1><p>{site.description}</p><Link className="launch-link" href={`/guides/${guides[0].slug}/`}>Initialize beginner route <b>↗</b></Link></div><dl className="telemetry-panel"><div><dt>Archive</dt><dd>{guides.length} missions</dd></div><div><dt>Factions</dt><dd>03 tracked</dd></div><div><dt>Protocol</dt><dd>Verify live</dd></div></dl></section>
  <section className="mission-index"><header><div><p className="system-label">Mission database</p><h2>Select an objective</h2></div><p>Choose the guide that matches the exact system, decision or blocker on your current screen.</p></header><div className="mission-table"><div className="table-head"><span>ID</span><span>Mission</span><span>Class</span><span>Access</span></div>{guides.map((guide,index)=><article key={guide.slug}><span>A-{String(index+1).padStart(2,"0")}</span><div><h3><Link href={`/guides/${guide.slug}/`}>{guide.title}</Link></h3><p>{guide.description}</p></div><span>{guide.category}</span><Link href={`/guides/${guide.slug}/`} aria-label={`Open ${guide.title}`}>OPEN ↗</Link></article>)}</div></section>
</main>}
