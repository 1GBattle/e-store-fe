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
import {
  get400Error,
  get401Error,
  get404Error,
  get500Error,
  getUnvalidatedError,
} from "@/app/utils/errors/errors";
import { toast } from "react-toastify";

export default function AboutPage() {
  const [trigger400Query] = useLazyGet400ErrorQuery();
  const [trigger404Query] = useLazyGet404ErrorQuery();
  const [trigger500Query] = useLazyGet500ErrorQuery();
  const [triggerValidationErrorQuery] = useLazyGetValidationErrorQuery();
  const [trigger401Query] = useLazyGet401ErrorQuery();
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const getValidationError = async () => {
    try {
      await getUnvalidatedError();
    } catch (error: any) {
      setValidationErrors(error.message.split(", ") as string[]);

      console.error(validationErrors);
    }
  };

  const errorHandler = (error: any) => {
    const responseData = error;
    const errorStatusCode = error.status;
    switch (errorStatusCode) {
      case 400:
        // if (typeof responseData === "string") {
        //   toast.error(responseData);
        // } else if ("errors" in responseData) {
        //   throw Object.values(responseData.errors).flat().join(", ");
        // } else {
        //   toast.error(responseData.title);
        // }
        console.log("400 error");
        break;
      case 401:
        typeof responseData === "object" && "title" in responseData
          ? toast.error(responseData.title)
          : toast.error(responseData as string);
        break;
      case 404:
        typeof responseData === "object" && "title" in responseData
          ? toast.error(responseData.title as string)
          : null;
        break;
      case 500:
        typeof responseData === "object" && "title" in responseData
          ? toast.error(responseData.title)
          : null;
        break;
      default:
        toast.error(responseData as string);
        break;
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
          onClick={() => get400Error().catch((err) => console.log(err))}
        >
          Test 400 Error
        </Button>
        <Button
          variant="contained"
          onClick={() => get401Error().catch((err) => console.log(err))}
        >
          Test 401 Error
        </Button>
        <Button
          variant="contained"
          onClick={() => get404Error().catch((err) => console.log(err))}
        >
          Test 404 Error
        </Button>
        <Button
          variant="contained"
          onClick={() => get500Error().catch((err) => console.log(err))}
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
