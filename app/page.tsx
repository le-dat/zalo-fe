import Image from "next/image";
import Categories from "./components/categories";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Chat from "./components/chat";
import Message from "./components/message";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <Categories />
        <Sidebar />

        <div className="flex flex-col flex-1">
          <Header />
          <Message />
          <Chat />
        </div>
      </div>
    </div>
  );
}
