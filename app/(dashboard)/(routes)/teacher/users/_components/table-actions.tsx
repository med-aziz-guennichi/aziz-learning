import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
async function TableActions({ user }: any) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/all-instructors`
  );
  const instructoId = response.data.map((instructor: any) => instructor.userId);

  const handleDelete = async (option: string) => {
    try {
      await axios.post(`/api/users/${user.id}`, {
        option,
      });
      if (option === "delete") {
        toast.success("User deleted successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else if (option === "ban") {
        toast.success("User banned successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const makeUserInstructor = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/make-user-instructor`,
        {
          userId: user.id,
        }
      );
      toast.success("User made an instructor successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <DialogTrigger>
                <BadgeIcon />
              </DialogTrigger>
              <TooltipContent>
                {instructoId.includes(user.id) ? (
                  <p>You are an instructor</p>
                ) : (
                  <p>Make a instructor</p>
                )}
              </TooltipContent>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
            <DialogFooter>
              <Button onClick={makeUserInstructor}>Confirm</Button>
              <Button variant="outline">Cancel</Button>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <DialogTrigger>
                <RemoveCircleIcon />
              </DialogTrigger>
              <TooltipContent>
                <p>Ban Account</p>
              </TooltipContent>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
            <DialogFooter>
              <Button onClick={() => handleDelete("ban")}>Confirm</Button>
              <Button variant="outline">Cancel</Button>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <DialogTrigger>
                <DeleteIcon />
              </DialogTrigger>
              <TooltipContent>
                <p>Delete account</p>
              </TooltipContent>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
            <DialogFooter>
              <Button onClick={() => handleDelete("delete")}>Confirm</Button>
              <Button variant="outline">Cancel</Button>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TableActions;
