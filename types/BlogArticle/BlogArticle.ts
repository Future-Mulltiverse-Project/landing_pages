import { ContentSection } from '~/types/Section/ContentSection';

export type BlogArticle = {
  id: number;
  slug: string;
  title: string;
  description?: string;
  createdAt?: string;
  sections?: Array<ContentSection>;
};
