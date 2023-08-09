import React from "react";
import { render, screen } from "@testing-library/react";
import { CircularChart } from "../circular-chart";

describe("CircularChart component", () => {
    it("renders percentage rating text", () => {
        render(<CircularChart rating={70} />);
        expect(screen.getByText('70%')).toBeInTheDocument();
    });
    
});