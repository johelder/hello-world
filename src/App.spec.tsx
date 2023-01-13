import {render} from "@testing-library/react";
import { App } from "./App";

describe('App Component', () => {
  it('should render the Hello Elofy title correctly', () => {
    const screen = render(<App />);

    expect(screen.getByText('Hello Elofy')).toBeInTheDocument()
  });
})