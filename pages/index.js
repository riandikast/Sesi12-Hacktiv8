import styles from "../styles/Home.module.css";
const API = "https://jsonplaceholder.typicode.com/posts";

import axios from "axios";

export default function Home(props) {
  return (
    <>
      <nav className="bg-github-blue h-12">
        <div className="flex items-center bg-github-blue h-16 ">
          <div className="flex ">
            <div className="flex text-white text-2xl  items-center mr-60 ml-16 mb-6">
              <h1 className="mr-16">Post - Next Js</h1>

            </div>
          </div>
        </div>
      </nav>

      <div className="block h-auto  bg-github-darker-blue flex space-x-20">
        <div className="h-96 mb-96 mt-60 w-0"></div>

        <div className="text-white ml-4 mt-8">
          {props.posts?.map((post) => (
            <tr className="bg-github-blue-b ">
              <td className=" px-1 py-3"> Title : {post.title} </td>
            </tr>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(API);
  const posts = await res.json();

  return {
    props: { posts },
  };
}
