"use client";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  List,
  ListItem,
} from "@mui/material";
import {
  useLazyGet404ErrorQuery,
  useLazyGet400ErrorQuery,
  useLazyGet500ErrorQuery,
  useLazyGetValidationErrorQuery,
  useLazyGet401ErrorQuery,
} from "@/app/about/error.api";
import { useState } from "react";

export default function AboutPage() {
  const [trigger400Query] = useLazyGet400ErrorQuery();
  const [trigger404Query] = useLazyGet404ErrorQuery();
  const [trigger500Query] = useLazyGet500ErrorQuery();
  const [triggerValidationErrorQuery] = useLazyGetValidationErrorQuery();
  const [trigger401Query] = useLazyGet401ErrorQuery();
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const getValidationError = async () => {
    try {
      await triggerValidationErrorQuery().unwrap();
    } catch (error: any) {
      setValidationErrors(error.message.split(", ") as string[]);

      console.error(validationErrors);
    }
  };
  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h5">
        Errors for testing
      </Typography>

      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() => trigger400Query().catch((err) => console.log(err))}
        >
          Test 400 Error
        </Button>
        <Button
          variant="contained"
          onClick={() => trigger401Query().catch((err) => console.log(err))}
        >
          Test 401 Error
        </Button>
        <Button
          variant="contained"
          onClick={() => trigger404Query().catch((err) => console.log(err))}
        >
          Test 404 Error
        </Button>
        <Button
          variant="contained"
          onClick={() => trigger500Query().catch((err) => console.log(err))}
        >
          Test 500 Error
        </Button>
        <Button variant="contained" onClick={() => getValidationError()}>
          Test Validation Error
        </Button>
      </ButtonGroup>

      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>
            <List>
              {validationErrors.map((err) => (
                <ListItem key={err}>{err}</ListItem>
              ))}
            </List>
          </AlertTitle>
        </Alert>
      )}
    </Container>
  );
}
