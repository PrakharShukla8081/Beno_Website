import { Metadata } from "next";
import { Suspense } from "react";
import { blogs } from "../../../../public/json/blogs";
import BlogDetailComponent, { BlogProps } from "@/components/blog/blogdetail";
import NotFound from "@/app/not-found";
import Loader from "@/app/loading";
import Banner from "@/components/industry/banner";

const getBlogById = (id: string | undefined): BlogProps | undefined => {
  return blogs.find((blog) => blog.id === id);
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params; // 👈 FIX
  const blog = getBlogById(id);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog does not exist.",
    };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blog.metaKeyword,
  };
}

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params; // 👈 FIX
  const blog = getBlogById(id);

  if (!blog) {
    return <NotFound />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Banner
        title="Get Our Latest Insights & News"
        button1="Learn More"
        href1="/contact-us"
        button2="+91 0120 423 4429"
        href2="tel:+9101204234429"
        bg="/images/blog/blog-detail.webp"
        bannerContentAlignment="left"
      />
      <BlogDetailComponent blog={blog} />
    </Suspense>
  );
};

export default BlogDetailPage;

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}
