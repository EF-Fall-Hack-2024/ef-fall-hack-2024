import { Button } from "@/components/ui/button";

export const AuthButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" className="flex items-center gap-2">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_24dp.png"
          alt="Google"
          className="w-5 h-5"
        />
        Sign in with Google
      </Button>
      <Button variant="outline" className="flex items-center gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt="Facebook"
          className="w-5 h-5"
        />
        Sign in with Facebook
      </Button>
    </div>
  );
};