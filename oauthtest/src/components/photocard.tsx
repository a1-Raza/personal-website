import React, { ReactNode } from "react";

interface PhotcardProps {
  header: ReactNode;
  imgUrl: string;
  children: ReactNode | ReactNode[];
}

export default function Photocard({ header, imgUrl, children }: PhotcardProps) {
  return (
    <div className="mb-3 p-5" style={{ width: "1000px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={imgUrl}
            className="img-fluid rounded-start"
            style={{ width: "200px", height: "200px" }}
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
