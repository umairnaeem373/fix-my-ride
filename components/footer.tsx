import { Wrench } from "lucide-react";
import Image from "next/image";
import icon from "../app/favicon.ico";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="border-t py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-lg">
                <Image
                  src={icon}
                  alt="FixMyRide Logo"
                  width={100}
                  height={100}
                />
              </div>
              <span className="text-xl font-bold">FixMyRide</span>
            </div>
            <p className="text-sm text-muted-foreground">
              On-demand mechanics at your fingertips
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Features</div>
              <div>Pricing</div>
              <div>Services</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>About</div>
              <div>Careers</div>
              <div>Contact</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Privacy</div>
              <div>Terms</div>
              <div>Security</div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FixMyRide. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
