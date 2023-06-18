import { Box, Center, Flex, Heading, Spacer } from "@chakra-ui/layout";

const Page = () => {
    return (
        <Center>
            <Flex minHeight="max-content" gap={2}>
                <Heading>情報</Heading>
                <Spacer />
                <Heading>Spacer</Heading>
            </Flex>
        </Center>
    );
};

export default Page;
