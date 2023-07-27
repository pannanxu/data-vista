import "@/App.css";
import {Button, Container} from "@mui/material";

// const useEnhancedEffect =
//     typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

function App() {

    return (
        <>
            <Container>
                <Button variant="contained">Hello World</Button>
            </Container>
        </>
    );
}

export default App;
