import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {HomeAd, HomeSideAd} from "@/components/ad-placements";
import {guides} from "@/lib/guides";
import {site} from "@/lib/site";

const guideDescriptions: Record<string, string> = {
  "abys-orbit-beginner-route": "Start with your current mission, then choose the next travel, combat, or upgrade step and check that the objective advanced.",
  "abys-orbit-factions": "Compare the three factions by social context, territory access, and what the game says about switching.",
  "abys-orbit-ships": "Compare ships and upgrades by mission role, equipment fit, configuration flexibility, resource cost, and fallback options.",
  "mission-stuck-troubleshooting": "Check the objective, location, required interaction, and reward state when a mission will not advance.",
  "auction-and-economy-safety": "Review auction and spending decisions against visible prices, current needs, and a fallback before committing resources.",
  "combat-and-survival-basics": "Learn the combat loop, survival checks, and what to look for after changing equipment or tactics.",
  "equipment-upgrade-priority": "Find the system limiting the next mission, then prioritize the smallest upgrade that directly tests that bottleneck.",
  "travel-and-navigation": "Plan a route from the destination, map access, and portal, then check that the transition completed.",
  "clan-system-guide": "Find answers about joining, founding, and managing a clan from the options shown in the game.",
  "early-credits-and-spending": "Decide what to earn or spend next from the current mission, visible prices, and the resources you need to keep.",
  "quest-prerequisite-checklist": "Check the required level, location, target, interaction, and reward state before retrying a quest.",
  "patch-and-retest-log": "Check what changed after a patch and keep a dated record of anything you retest.",
};

export const metadata:Metadata={alternates:{canonical:"/"}};
export default function Home(){return <main className="orbit-console">
  <HomeAd/>
  <div className="home-hero-shell"><section className="bridge"><div className="bridge-visual"><Image src={site.visual} width={site.visualWidth} height={site.visualHeight} sizes="100vw" priority alt={site.visualAlt}/><div className="scan-lines"/><p>Live navigation image · verify current mission state in game</p></div><div className="bridge-copy"><p className="system-label">Abys navigation network / Online</p><h1>Abys Orbit Guides for Missions, Ships, and Progression</h1><p>Find practical help for first missions, faction and ship choices, upgrades, combat, travel, clans, auctions, credits, and common quest blockers.</p><Link className="launch-link" href={`/guides/${guides[0].slug}/`}>Initialize beginner route <b>↗</b></Link></div><dl className="telemetry-panel"><div><dt>Archive</dt><dd>{guides.length} missions</dd></div><div><dt>Factions</dt><dd>03 tracked</dd></div><div><dt>Protocol</dt><dd>Verify live</dd></div></dl></section><HomeSideAd/></div>
  <section className="mission-index"><header><div><p className="system-label">Mission database</p><h2>Select an objective</h2></div><p>Choose what you’re trying to do now. Each guide focuses on one decision, system, or blocker and shows what to check before you act.</p></header><div className="mission-table"><div className="table-head"><span>ID</span><span>Mission</span><span>Class</span><span>Access</span></div>{guides.map((guide,index)=><article key={guide.slug}><span>A-{String(index+1).padStart(2,"0")}</span><div><h3><Link href={`/guides/${guide.slug}/`}>{guide.title}</Link></h3><p>{guideDescriptions[guide.slug] ?? guide.description}</p></div><span>{guide.category}</span><Link href={`/guides/${guide.slug}/`} aria-label={`Open ${guide.title}`}>OPEN ↗</Link></article>)}</div></section>
</main>}
