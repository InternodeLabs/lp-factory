# How to fix a stale knowledge base without anyone typing more

*A short writeup for Daniel Ndukwu, Pario.ai. By Istvan Lorincz, co-founder at Internode.*

Knowledge bases go stale not because people are lazy but because the act of writing a page competes with the act of doing the work. Removing the writing step entirely is the fix, and it has four parts: capture conversations as input, extract structured outcomes automatically, link every record to the moment it came from, and let the system propose updates instead of asking humans to maintain pages. The rest of this writeup walks through why this matters, why bolting AI onto Notion does not get you there, and a 30-minute test you can run on your own data this week.

## Why your wiki rots even when smart people maintain it

Pages are an output of writing, not an output of working. Your team makes a real product decision in a 45-minute Zoom call. The page that captures it would take 15 minutes of someone's evening to write.

Most weeks, nobody writes it. The decision still happened. The page just does not reflect it.

Now scale this across a small team with a few calls per day. Within a quarter, the wiki is a snapshot of decisions from a few months ago, not the current state of the team's thinking. Smart, conscientious people maintain wikis the same way: they write the parts they remember to write, and they fall behind on the parts they do not.

The deeper problem is that writing a page is a separate act from doing the work it captures. A founder who just got off a customer call has a choice: spend 15 minutes typing up what was decided, or move on to the next thing. The next thing always wins, because it has to.

## The trust collapse: when Slack becomes the wiki

Once a page falls behind reality more than once, your team learns the page is unreliable. They stop opening it. They ask in Slack instead, because Slack at least has the most recent answer if you are willing to scroll.

This is the trust collapse, and it is one-way. A wiki that has been wrong twice in a row never gets the team's trust back. The cost compounds because Slack threads are not findable past two weeks. Your team replaces a stale-but-structured record with a fresh-but-disposable one, and you lose both ends of the deal: the structure of a wiki and the freshness of chat.

By the time someone says "we should clean up the Notion," the workspace already has three competing "project" databases, two conflicting status fields, and a folder called Archive that nobody opens. The cleanup is real work, and it does not solve the underlying mechanism. A month later you will have the same problem with newer pages.

## The fix in four moves (no one types more)

The fix is structural, not motivational. There are four moves, each of which removes a layer of human writing.

**1. Make the conversation the input.** Record the meeting on whatever channel your team already uses: Zoom, Google Meet, an in-room recorder, or the built-in transcription on your phone for ad hoc calls. Treat the audio as the source of truth for what got said and decided. The post-meeting writeup goes away.

**2. Extract structured outcomes, not summaries.** A summary tells you what the meeting was about. A structured record tells you what changed: what was decided, who owns each follow-up, what alternatives were rejected (and the reasoning), and what problems got flagged for next time. Decisions, tasks, topics, and goals each become their own record, not a paragraph buried inside someone's notes.

**3. Link every record to its source moment.** Every decision points back to the call it was made in, the timestamp inside the call, the person who agreed, and the earlier decision it replaces. This is the part a wiki page architecturally cannot do, because a page is a snapshot. You want a graph: decisions connected to the meetings they came from, the tasks that followed, the topics they belong to, and the prior decisions they superseded.

**4. Let the system propose updates, do not ask humans to maintain.** When a later call changes a prior decision, the older record gets flagged and the new one supersedes it. The human's job is to approve the proposal, not to write the new page. At Internode, every change the agent suggests is a proposal you approve or edit first, so nothing changes silently.

The four moves together remove the maintenance burden. Knowledge stops being something you have to write up and becomes something the system extracts from work you were already doing.

## Why bolting AI onto Notion does not get you there

Notion AI is a useful feature, and Notion the wiki is a flexible workspace. Neither of them solves this problem, and the reason is architectural.

Notion was built around a model where humans write pages and define database schemas. The AI features sit on top of that model: they can summarize a page you already wrote, answer questions about your workspace, or draft text inside a block. They cannot write the page about the call they were not in, because no part of the architecture is designed to ingest a meeting as a first-class input.

Adding AI to Notion is like adding power steering to a horse-drawn carriage. The carriage moves a little easier, but it still moves at the speed of a horse. The fundamental constraint, that a human writes the page, has not been removed.

An AI-first knowledge system inverts the assumption. The AI handles capture, structure, and maintenance from the start. The user feeds in raw material (recordings, transcripts, documents, chat) and directs the system. There is no human-built schema for the AI to conflict with, because the structural layer is the AI's job by design.

## What this looks like for a small team (the Pario-sized variant)

The mechanism does not change at small scale, but the symptoms show up differently. At two co-founders, you can almost get away without it. You both remember every product call.

The Notion workspace exists but neither of you opens it. Decisions live in a Zoom call, a Slack DM, and the shared mental model of two people who talk all day.

The gap shows up the week you hire your first non-founder engineer. They ask "why did we ship that behind a flag two weeks ago?" and the honest answer is "we discussed it on a Tuesday call, the reasoning is in our heads, the Slack thread is buried, and the Notion page is from before that call." That is the moment the cost lands.

You do not need a PM headcount or a knowledge management initiative to fix this. You need the same four moves above, applied to the calls you are already recording. Two co-founders with five recorded product calls a week produce a usable decision graph inside Internode by the end of month one. The first new hire can answer their own context questions in week two instead of pulling a co-founder out of a build session every time.

## A 30-minute setup that proves it on your own data

The fastest way to test any of this is on a meeting you were already going to have. Skip the trial accounts and the demo decks. Try this:

1. Pick the next product call on your calendar (a customer interview, a feature scoping call, even a co-founder sync where you are making real calls).
2. Record it on Zoom or Google Meet, or use your phone's built-in transcription if it is in person. Five minutes of setup max.
3. Run the recording through an AI-first tool (Internode if you want a direct comparison to what we built, or whatever else you want to evaluate against). Look at what comes out the other side: the things you agreed on, the action items with owners, the problems that got raised, the alternatives you rejected, and the names that came up.
4. Compare that output to whatever notes someone took by hand, or to the Notion page that would have been written (or, more likely, never written).

You will know within one meeting whether the model works for the way your team actually makes decisions. If it does not, you have lost 30 minutes. If it does, you have a record of one real product call that is more usable than the last six months of wiki edits combined.

## Where Internode fits

Internode reads meetings, calls, emails, and chat messages. It pulls out decisions, tasks, topics, and goals as connected records, with each one linked back to the source moment. When a new conversation changes an earlier decision, the agent proposes the update and you approve it. Tasks sync both directions with Linear or Jira if you use them.

That is the whole pitch. We built it because we kept hitting the same wall ourselves: pages we were supposed to maintain, decisions we kept relitigating, a wiki we stopped trusting. Discipline was never going to fix that. The shape of the tool had to change.

If you want to see what the four moves look like running on your own data, the fastest path is a 15-minute walkthrough. I can show you a working setup in less time than your next standup. Or you can just sign up at [app.internode.ai](https://app.internode.ai) and run the 30-minute test above on your next call.

Either way, thanks for the reply. Happy to dig into any of this in more depth if useful.

Best,
Istvan Lorincz
Co-founder, Internode
