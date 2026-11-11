import { defineQuery } from "next-sanity";

export const FAQ_PAGE_QUERY = defineQuery(
  `*[_type == "faqPage"][0] {
    title,
    intro,
    faqs[] {
      _key,
      question,
      answer
    }
  }`,
);
