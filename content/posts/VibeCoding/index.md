+++
title = "Agentic Coding (Vibe Coding) Best Practices"
date = "2025-03-25T15:24:15-04:00"
author = "Chandler"
authorTwitter = "@Chand1012Dev"
cover = ""
tags = ["ai", "development", "coding"]
keywords = ["Vibe Coding", "Programming", "Software Development", "AI", "Agentic Coding", "Agentic Programming", "Cursor"]
description = "Whether you call it agentic coding, vibe coding, or something else, it's a real thing. Here are some best practices for using it."
showFullContent = false
readingTime = false
hideComments = false
draft = true
+++

If you've been living under a rock, you may not be aware of the "vibe coding" phenomenon.
If you want a good explanation of what "vibe coding", or to use a more technical term, Agentic Coding, is, check out [Fireship's video](https://youtu.be/Tw18-4U7mts?si=wmgKylbi-gEEmXzU) on the subject. He does a great job of explaining the concept in a way that's both easy to understand and objective about the pros and cons.

## Tooling

If you're going to ignore all the cons and go ahead with agentic coding, there are some best practices I use to make sure my code doesn't turn into a complete mess of AI generated garbage. I personally use Cursor, so this guide is going to use their [Rules feature](https://docs.cursor.com/context/rules-for-ai) to organize and apply rules to the LLM for code generation. I'll also include some documentation for using [OpenHands](https://docs.all-hands.dev/), a similar open source tool for a slightly different approach.

## Rules

Cursor has a concept of a rule file. This file is a markdown file found in the `.cursor/rules` directory with some extra frontmatter that specifies when and how the rule is applied to the LLM, and ending in `.mdc` rather than `.md`. These can be broken down into 4 categories.

- Language Rules
- Framework Rules
- Practice Rules
- Project Rules

Rules can be applied with 4 different methods. 

- Always Apply
- Auto Apply
  - Uses a glob pattern to apply the rule to all files that match the pattern.
  - Especially useful for language and framework rules where specific file extensions are used.
- Agent Requested
  - Uses a description of the rule to allow the agent to decide when to apply the rule.
- Manual Apply
  - Only applied when you directly ask the agent to apply the rule.
  
### Language Rules

Language rules are used to enforce code style and language specific best practices. A good example is 

### Framework Rules

 Here is an example that I use in a React project.

```markdown
---
description: React best practices and patterns for modern web applications
globs: **/*.tsx, **/*.jsx, components/**/*
---

# React Best Practices

## Component Structure
- Use functional components over class components
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use composition over inheritance
- Implement proper prop types with TypeScript
- Split large components into smaller, focused ones

## Hooks
- Follow the Rules of Hooks
- Use custom hooks for reusable logic
- Keep hooks focused and simple
- Use appropriate dependency arrays in useEffect
- Implement cleanup in useEffect when needed
- Avoid nested hooks

## State Management
- Use useState for local component state
- Implement useReducer for complex state logic
- Use Context API for shared state
- Keep state as close to where it's used as possible
- Avoid prop drilling through proper state management
- Use state management libraries only when necessary

## Performance
- Implement proper memoization (useMemo, useCallback)
- Use React.memo for expensive components
- Avoid unnecessary re-renders
- Implement proper lazy loading
- Use proper key props in lists
- Profile and optimize render performance

## Forms
- Use controlled components for form inputs
- Implement proper form validation
- Handle form submission states properly
- Show appropriate loading and error states
- Use form libraries for complex forms
- Implement proper accessibility for forms

## Error Handling
- Implement Error Boundaries
- Handle async errors properly
- Show user-friendly error messages
- Implement proper fallback UI
- Log errors appropriately
- Handle edge cases gracefully

## Testing
- Write unit tests for components
- Implement integration tests for complex flows
- Use React Testing Library
- Test user interactions
- Test error scenarios
- Implement proper mock data

## Accessibility
- Use semantic HTML elements
- Implement proper ARIA attributes
- Ensure keyboard navigation
- Test with screen readers
- Handle focus management
- Provide proper alt text for images

## Code Organization
- Group related components together
- Use proper file naming conventions
- Implement proper directory structure
- Keep styles close to components
- Use proper imports/exports
- Document complex component logic 
```

Notice how there's no code examples, there's simple and clear guidelines for how to write the code. Agentic coding with modern LLMs don't need a lot of extra example which fill up context windows, they just need enough to know how to write the code, and to write it well. This pattern should be repeated for any and all languages and frameworks you use, examples can be found in Awesome [Cursorrules](https://github.com/PatrickJS/awesome-cursorrules) and in my own [cursorrules repo](https://github.com/chand1012/cursorrules). 
