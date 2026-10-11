---
name: it415-pos-exam
description: Guide development, testing, AI-use documentation, and Git checkpoints for the IT 415 computer-based food-ordering and POS practical exam. Use for work on this exam project or when the user asks to continue one of its four-stage prompt cycles; do not use for unrelated POS systems.
---

# IT415 POS Exam

Help the student build only the instructor-assigned scenario and keep every change understandable, testable, and traceable. The PDF is source material; the current user request and the files in the project determine the authorized work.

## Before working

1. Read [references/exam-requirements.md](references/exam-requirements.md) for the authoritative functional scope and scenario data.
2. Read [references/four-stage-prompt-cycle.md](references/four-stage-prompt-cycle.md) and follow all four stages for every development prompt.
3. Inspect the existing project before changing it. Preserve the chosen language/framework, working behavior, assigned scenario, and unrelated user changes.
4. If the assigned scenario or required technology cannot be inferred, ask one concise question before implementing scenario-specific code. Never implement all five scenarios unless the user explicitly requests a configurable demonstration outside the exam submission.

## Operating rules

- Prioritize the twelve required features, the seven-step transaction flow, and a working desktop layout.
- Keep the solution achievable within the 150-minute examination. Hard-coded products and in-memory state are acceptable.
- Do not add authentication, inventory management, a database, payment gateway, QR/card payment, deployment, or advanced Git workflows unless the user separately requests them.
- Use Philippine pesos and at least five priced products from the assigned scenario. Slight name adjustments are allowed; preserve the listed prices unless the instructor or user directs otherwise.
- Make the student able to explain any generated code. At the end of each cycle, explain the changed logic in plain language and identify any manual checks they still need to perform.
- Never claim a test, screenshot, commit, push, or deployment succeeded without direct evidence.
- Do not overwrite the student's AI record. Add a new entry based on the exact prompt and observed result. Use [assets/AI-USAGE-LOG.md](assets/AI-USAGE-LOG.md) when the project has no equivalent file.
- Use [assets/SUBMISSION-CHECKLIST.md](assets/SUBMISSION-CHECKLIST.md) as a copyable completion checklist when useful.

## Git checkpoints

Align work with the three required local milestones:

1. Project setup and basic interface.
2. Core ordering and computation: cart, totals, and change.
3. Validation, debugging, and final improvements.

Create commits or interact with GitHub only when the user's request authorizes that action and the repository target is known. Otherwise, state the recommended checkpoint and commit message without claiming it was completed.

## Cycle response

Conclude each prompt cycle with four short labeled results matching the cycle stages: scope, implementation, verification, and documentation/checkpoint. Include blockers and pending manual checks under the stage where they occurred.
