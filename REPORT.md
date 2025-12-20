# REPORT – Three.js Editor Migration

## Issues in the Original Example

The original Three.js editor code is highly imperative, with multiple responsibilities mixed together (scene creation, renderer setup, animation loop, resize handling).

There is no explicit lifecycle management (mount / unmount), which causes issues when integrating with React.

Three.js resources such as the renderer, geometries, materials, and event listeners are not clearly disposed, which can lead to memory leaks.

Overall, the code is difficult to maintain or extend in a modern framework like Next.js.

---

## Migration Approach

The editor was reimplemented inside a Next.js + TypeScript project without directly copy-pasting the original JavaScript code.

Official Three.js typings were used throughout the codebase, without relying on `any`.

All Three.js logic was moved into Client Components and custom React hooks.

Global mutable logic was replaced with `useRef` to avoid unnecessary React re-renders.

Rendering, animation, and resize handling are executed exclusively on the client side.

---

## Architectural Decisions

To avoid placing all logic inside a single `useEffect`, responsibilities were clearly separated:

- Scene setup (objects, lights, camera)
- Renderer management (DOM attachment, resize handling)
- Animation loop

This separation makes the code more readable, easier to test, and simpler to evolve over time.

The main component acts as an orchestrator rather than a monolithic container for all logic.

---

## Trade-offs & Open Questions

The full editor UI (menus, commands, undo/redo system) was not reimplemented.

Advanced synchronization between React state and Three.js objects was intentionally kept minimal.

The focus of this work was on architecture and lifecycle management rather than a complete feature-by-feature reproduction of the official editor.

---

## If This Were Production

Possible next improvements would include:

- Introducing a proper global state management solution for the editor
- Implementing undo/redo and command handling
- Optimizing performance for complex scenes
- Adding automated tests and a more complete CI pipeline
- Further structuring the codebase to support plugins or extensions
