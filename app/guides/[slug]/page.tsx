import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {Fragment} from "react";
import {notFound} from "next/navigation";
import {GuideAd} from "@/components/ad-placements";
import {GuideStructuredData} from "@/components/structured-data";
import {getGuide,guides} from "@/lib/guides";
import {site} from "@/lib/site";

export const dynamicParams=false;
export function generateStaticParams(){return guides.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const guide=getGuide((await params).slug);return guide?{title:guide.title,description:guide.description,alternates:{canonical:`/guides/${guide.slug}/`},openGraph:{images:[guide.sections.find((s)=>s.visual)?.visual?.src||site.visual]}}:{}}

export default async function GuidePage({params}:{params:Promise<{slug:string}>}){
  const guide=getGuide((await params).slug);if(!guide)notFound();
  const leadVisual=guide.sections.find((section)=>section.visual)?.visual;
  return <main className="mission-file">
    <GuideStructuredData guide={guide}/>
    <aside className="mission-rail"><Link href="/">← Command</Link><span>File status</span><b>Active</b><span>Updated</span><b>{guide.updated}</b><span>Sections</span><b>{String(guide.sections.length).padStart(2,"0")}</b></aside>
    <article className="mission-content"><header><p className="system-label">Mission file / {guide.category}</p><h1>{guide.title}</h1><p>{guide.description}</p></header><section className="priority-order"><span>Priority order</span><p>{guide.quickAnswer}</p></section><GuideAd/>{leadVisual?<figure className="lead-visual" data-asset-id={leadVisual.assetId}><Image src={leadVisual.src} width={leadVisual.width} height={leadVisual.height} sizes="(max-width: 900px) 100vw, 900px" priority alt={leadVisual.alt}/><figcaption>{leadVisual.caption}</figcaption></figure>:null}{guide.sections.map((section,index)=><Fragment key={section.heading}><section className="system-section" id={`system-${index+1}`}><header><span>{String(index+1).padStart(2,"0")}</span><div><p>System checkpoint</p><h2>{section.heading}</h2></div></header>{section.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}{section.visual&&section.visual.assetId!==leadVisual?.assetId?<figure data-asset-id={section.visual.assetId}><Image src={section.visual.src} width={section.visual.width} height={section.visual.height} sizes="(max-width: 900px) 100vw, 820px" alt={section.visual.alt}/><figcaption>{section.visual.caption}</figcaption></figure>:null}</section></Fragment>)}<section className="system-section sources"><header><span>Σ</span><div><p>External records</p><h2>Sources</h2></div></header>{guide.sources.map((source)=><p key={source.url}><a href={source.url} rel="noreferrer">{source.label} ↗</a></p>)}</section></article>
  </main>;
}
