import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EditDocument } from "@/app/actions/documents/route";
import { RiEditLine } from "react-icons/ri";
const EditPost = ({ id }) => {
  const [user, setUser] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleCreatePost = async (userId, title, body) => {
    try {
      const userIdInt = parseInt(userId, 10);
      await EditDocument(id, userIdInt, title, body);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size={"sm"}>
            <RiEditLine />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit post </DialogTitle>
            <DialogDescription>Edit document to page!</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              UserId
            </Label>
            <Input
              id="UserId"
              placeholder="UserId..."
              className="col-span-3"
              value={user}
              required
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Title
            </Label>
            <Input
              required
              id="Title"
              placeholder="Title..."
              className="col-span-3"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Body
              </Label>
              <Input
                required
                id="Body"
                placeholder="Body..."
                className="col-span-3"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
            </div>
          </div>{" "}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Upload Image
            </Label>
            <Input id="file" type="file" className="col-span-3" />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => {
                handleCreatePost(user, title, body);
              }}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditPost;
