"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import ExhibitionCard from "./app/components/ExhibitionCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(ExhibitionCard, {
  name: "ExhibitionCard",
  inputs: [
    {
      name: "exhibition",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Exhibition",
      },
      required: true,
    },
  ],
});
