Hi Daniel,

As promised. Two versions below: a short one in this email, and a longer playbook attached if you want to dig in.

The diagnosis: knowledge bases go stale because the act of writing a page competes with the act of doing the work. The decision gets made in a 45-minute Zoom call. The page that would capture it would take 15 minutes to write. Nobody writes it.

The page falls behind reality. The team learns the page is unreliable and starts asking in Slack instead. Once that pattern sets in, the wiki is dead even if it still exists.

The fix is not "write better pages." It is "stop requiring anyone to write them."

Four moves that get you there:

1. **Make the conversation the input, not the page.** Record the call (Zoom, Google Meet, or phone). Skip the post-meeting writeup entirely.
2. **Extract structured outcomes, not summaries.** What was decided, who owns the follow-up, what alternatives were rejected, what problems got flagged. A summary tells you what the meeting was about. A structured record tells you what changed.
3. **Link every record to its source moment.** Each decision points back to the timestamp where it was made and the person who agreed. A page is a snapshot. You want a graph.
4. **Let the system propose updates, do not ask humans to maintain.** When a later call changes a prior decision, the older record gets flagged and the new one supersedes it automatically. Humans approve, they do not type.

This works the same whether you have ten PMs and a Notion workspace or two co-founders making product calls on a Zoom call. The mechanism does not change with team size. The pain just shows up sooner than people expect, usually the week the first non-founder engineer asks "wait, why did we ship that behind a flag?"

The attached playbook walks through why bolting AI onto Notion does not get you there, the architecture that does, and a 30-minute test you can run on your own data with the next product call you were already going to have.

If any of this resonates, happy to walk you through how we built it at Internode in 15 minutes. Or you can poke around free at [app.internode.ai](https://app.internode.ai).

Best,
Istvan
