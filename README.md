# Three.js Editor – Next.js + TypeScript

This project is a simplified reimplementation of the **Three.js Editor** example, built with **Next.js**, **TypeScript**, and **Three.js**.

The goal is not to fully reproduce the entire editor UI, but to demonstrate:
- clean architecture,
- proper lifecycle management,
- and a correct migration from imperative JavaScript to React + TypeScript.

## Preview

![Editor Preview](./public/preview.png)

> The scene renders a basic Three.js setup (scene, camera, lighting, rotating cube) to validate rendering, animation, and lifecycle handling.

---

## Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Three.js**
- **Tailwind CSS**

---

## Project Structure

```txt
app/
  page.tsx            # Server Component entry
components/
  ThreeEditor.tsx     # Client Component orchestrating the editor
hooks/
  useThreeScene.ts    # Scene, camera, objects setup
  useThreeRenderer.ts # Renderer + resize handling
  useAnimationLoop.ts # Animation loop
