import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const faqPage = defineType({
  name: "faqPage",
  title: "FAQ Page",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "faqs",
      title: "Questions and Answers",
      type: "array",
      of: [
        defineArrayMember({
          name: "faq",
          title: "Question and Answer",
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              description: "Separate paragraphs with a blank line.",
              rows: 6,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "question" },
            prepare: ({ title }) => ({ title: title || "Untitled question" }),
          },
        }),
      ],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    prepare: () => ({ title: "FAQ Page" }),
  },
});
