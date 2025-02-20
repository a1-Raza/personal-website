import React, { ReactNode } from "react";
import Image from "next/image";

interface PhotcardProps {
  header: ReactNode;
  children: ReactNode | ReactNode[];
}

export default function Photocard({ header, children }: PhotcardProps) {
  return (
    <div className="mb-3 p-5" style={{ width: "1000px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <Image
            src="/osaker.png"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-title h1">{header}</p>
            <div
              className="card-text"
              style={{ paddingTop: "10px", fontSize: "17px" }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
