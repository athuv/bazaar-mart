import CartLink from "@/app/components/atoms/links/CartLink";
import ProfileLink from "@/app/components/atoms/links/ProfileLink";
import React from "react";

function ProfileAndCartLink() {
  return (
    <div className="flex">
      <ProfileLink />
      <CartLink />
    </div>
  );
}

export default ProfileAndCartLink;
