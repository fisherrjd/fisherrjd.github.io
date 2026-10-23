import{C as e,M as t,Nn as n,P as r,Qt as i,S as a,T as o,Tt as s,d as c,j as l,or as u,w as d,yt as f}from"./Primitive-BI-PahlR.js";import{c as p,t as m}from"./site-vpujykic.js";import{t as h}from"./Card-UInET91Y.js";import{n as g,t as _}from"./MarkdownView-DGnnBdNh.js";var v={slug:`about`,title:`About`,date:`2025-08-21`,draft:!1,tags:[],description:`Senior software and AI engineer in Denver, building production AI products and the platforms beneath them.`,body:`
I'm Jade, a senior software and AI engineer in Denver. I build production AI products and the platforms beneath them: coding agents that ship real code, the serverless runtimes they deploy to, and the release, observability, and security work that keeps every layer shippable. Day to day, I run my own engineering through agent teams, with a human approving every merge and release.

## Work

### Sinch

- Shipped the Functions Assistant to GA: a Claude Code agent in sandboxed pods that builds and deploys serverless functions, the source of 40% of Sinch Functions' 275 production functions
- Built the core of Front Desk, an AI receptionist on the Sinch Agents SDK: CRM lead capture, Google Calendar booking over OAuth, and industry presets
- Owned 7 releases of the Node.js serverless runtime, including a security hardening release gated by a scan of 197 live production functions
- Built end-to-end deploy tracing with W3C trace context, from agent SDK to CLI to API

### Charter (Spectrum)

- Built low-latency features for the core authentication gateway, handling millions of auth requests a day
- Led OAuth 2.0 and SSO integrations with Hulu, Disney+, ESPN+, and Boku
- Built an intake triage agent on AWS Bedrock that routes Jira work across 5 portfolio teams
- Led AI governance standards, including a 100+ attendee session on enterprise AI and context management

### Boeing

- Built Java microservices and REST APIs for secure satellite communication systems

### Lockheed Martin

- Built ground control software and Qt interfaces for the Space-Based Infrared System (SBIRS)

## Projects

### Wisp

A Go TUI on top of tmux for running coding agents: one work item, one session. It pulls the item locally or from GitLab, sets up git worktrees, writes a context file for the agent, and spans machines over SSH. Works with any agent. [wisp.jade.rip](https://wisp.jade.rip) · [GitHub](https://github.com/fisherrjd/wisp)

### factory

A software factory for my personal projects: an idea becomes a plan PR, then a tested PR and a preview. Agent teams do the work and I approve every step. Early prototype, private for now!

### news

My personal news feed: trending GitHub repos, tech and world news, and a price-first deals tab, with saved stories and muted words and sites. [news.jade.rip](https://news.jade.rip)

### Nix infrastructure

Every server and computer I own, configured declaratively and reproducibly with Nix. [fisherrjd/nix](https://github.com/fisherrjd/nix)

### PartyTime

An Old School RuneScape plugin that tracks drop parties at the Grand Exchange for the whole community. [Server](https://github.com/fisherrjd/PartyTime-server-java)

## Skills

### AI engineering

Agent loops, Agent fleet orchestration, Eval harnesses, Context engineering, MCP servers, Claude Agent SDK, AWS Bedrock, Local models

### Coding agents

Claude Code, Codex, OpenCode, Pi

### Languages

TypeScript, Python, Java, Go, C#, Bash, Nix

### Frameworks

Node.js, Spring, FastAPI

### Platform

Serverless, Kubernetes, AWS, Datadog, NixOS, Redis, Cassandra, PostgreSQL, SQLite

### Security

OAuth 2.0, OIDC, SSO, RBAC, Identity federation, Secrets management
`},y={key:0,class:`space-y-12`},b={class:`space-y-4`},x={class:`text-3xl font-bold tracking-tight`},S={class:`font-mono text-[11px] tracking-widest text-muted-foreground uppercase`},C={class:`font-mono text-[11px] tracking-widest text-muted-foreground uppercase`},w={class:`flex flex-wrap gap-1.5`},T={key:2,class:`grid gap-3 sm:grid-cols-2`},E={class:`font-heading text-lg font-semibold tracking-tight`},D=r({__name:`AboutView`,setup(r){p(`About · ${m.title}`);function D(e){let[t=``,...n]=e.split(`
`);return{title:t.trim(),body:n.join(`
`).trim()}}let[O=``,...k]=(v?.body??``).split(/^## /m),A=k.map(e=>{let[t=``,...n]=e.split(/^### /m);return{...D(t),blocks:n.map(D)}}),j=e=>e.title.toLowerCase()===`skills`,M=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean);return(r,p)=>n(v)?(f(),o(`div`,y,[a(`header`,b,[a(`h1`,x,u(n(v).title),1),t(_,{source:n(O).trim(),class:`text-lg`},null,8,[`source`])]),(f(!0),o(c,null,s(n(A),r=>(f(),o(`section`,{key:r.title,class:`space-y-4`},[a(`h2`,S,u(r.title),1),r.body?(f(),e(_,{key:0,source:r.body},null,8,[`source`])):d(``,!0),j(r)?(f(),e(n(h),{key:1,class:`gap-0 divide-y px-5 py-1`},{default:i(()=>[(f(!0),o(c,null,s(r.blocks,t=>(f(),o(`div`,{key:t.title,class:`grid gap-2 py-3.5 sm:grid-cols-[8rem_1fr] sm:items-center`},[a(`h3`,C,u(t.title),1),a(`div`,w,[(f(!0),o(c,null,s(M(t.body),t=>(f(),e(n(g),{key:t,variant:`outline`},{default:i(()=>[l(u(t),1)]),_:2},1024))),128))])]))),128))]),_:2},1024)):r.blocks.length?(f(),o(`div`,T,[(f(!0),o(c,null,s(r.blocks,r=>(f(),e(n(h),{key:r.title,class:`gap-2.5 p-5`},{default:i(()=>[a(`h3`,E,u(r.title),1),t(_,{source:r.body,class:`text-sm`},null,8,[`source`])]),_:2},1024))),128))])):d(``,!0)]))),128))])):d(``,!0)}});export{D as default};