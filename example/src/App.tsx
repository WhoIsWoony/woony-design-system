import { useState } from "react";
import {
  Body,
  Button,
  TextBase,
  Flex,
  Input,
  FlexHorizontal,
  HeaderBase,
  Form,
} from "woony-design-system";

function App() {
  const [data, setData] = useState({ info: "" });
  const onSubmit = () => console.log(data);
  return (
    <Body>
      <Flex>
        <Form onSubmit={onSubmit}>
          <HeaderBase>Hello</HeaderBase>
          <FlexHorizontal>
            <Input
              placeholder="입력해주세요"
              onChange={(text: string) =>
                setData((prev) => ({ ...prev, info: text }))
              }
              value={data.info}
            />
            <Button type="submit">
              <TextBase>Hello</TextBase>
            </Button>
            <Button>
              <TextBase>Hello</TextBase>
            </Button>
          </FlexHorizontal>
        </Form>
      </Flex>
    </Body>
  );
}

export default App;
