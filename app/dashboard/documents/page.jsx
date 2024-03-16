"use client";
import { Button } from "@/components/ui/button";
import Search from "@/components/ui/search";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Axios from "axios";
import {
  createDocument,
  deleteDocument,
  getallDocument,
} from "@/app/actions/documents/route";
import { RiDeleteBack2Line } from "react-icons/ri";
import PostDocument from "@/components/ui/posts/createPost";
import EditPost from "@/components/ui/posts/editPost";
const DashboardBlog = () => {
  const [data, setData] = useState([]);
  // console.log(user, title, body);

  // useEffect(() => {
  //   Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
  //     console.log(response.data);
  //     setData(response.data);
  //   });
  // }, []);

  const deletePost = async (id) => {
    try {
      console.log(id);
      await deleteDocument(id);
    } catch (error) {
      console.log("Error delete post!", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docs = await getallDocument();
        // console.log(docs);
        setData(docs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full p-10">
      <h1 className="hidden xl:flex font-medium text-[20px]">Documents</h1>
      <div className=" flex gap-3 ">
        <Search placeholder={"Search.."} />
        <PostDocument />
      </div>

      <ScrollArea className="h-[60vh] xl:h-[70vh] mt-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Body</TableHead>
              <TableHead>Custom</TableHead>
              <TableHead className="text-right">Image</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data) => (
              <TableRow key={data.id}>
                <TableCell className="font-medium">{data.id}</TableCell>
                <TableCell className="">{data.title}</TableCell>
                <TableCell>{data.body}</TableCell>
                <TableCell>
                  <div className="items-center flex">
                    <EditPost id={data.id} />
                    <Button
                      variant={"outline"}
                      size={"sm"}
                      onClick={() => deletePost(data.id)}
                    >
                      <RiDeleteBack2Line />
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {/* {invoice.totalAmount} */}
                  File image
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>

      <div className="flex flex-row pt-5 pl-5 pr-8 justify-between">
        <div>Total</div>
        <div className="right-0">2500</div>
      </div>
    </div>
  );
};

export default DashboardBlog;
