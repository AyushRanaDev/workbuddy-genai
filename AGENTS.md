<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Gig worker companion architecture
- Keep mock replies and topic detection in a browser-safe pure module with no model or network clients, so the evaluation build stays offline and deterministic.
- Keep the single demo chat in browser local storage with a versioned key and visibly label all example information, because this prototype has no real user-data service.
- For conversational UI, use the installed AI Elements primitives for message rendering, the prompt, loading state, and scroll behavior, because these keep interaction semantics consistent while local mock logic remains separate.
