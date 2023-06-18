import { Button } from "@chakra-ui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import {
    Box,
    Container,
    Flex,
    HStack,
    Heading,
    Link,
    Stack,
    StackDivider,
    Text,
    VStack,
} from "@chakra-ui/layout";
import { BrowserView, MobileView } from "react-device-detect";
import NextLink from "next/link";
import { TransactionItem } from "./componet/TransactionItem";
import { Spacer } from "@chakra-ui/react";

const Page = () => {
    return (
        <>
            <BrowserView>
                <VStack>
                    <Flex w="100vw" h="40vh" justify="center" align="center">
                        <HStack spacing={"100px"}>
                            <Card width={200}>
                                <CardHeader>
                                    <Heading size={"md"}>情報</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                        プレイ履歴やアカウント情報を確認する
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Link as={NextLink} href="/users/1">
                                        <Button bgColor={"blue.400"}>
                                            Click
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                            <Card width={200}>
                                <CardHeader>
                                    <Heading size={"md"}>ランキング</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>
                                        全プレイヤーの所持金ランキングを確認する
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Link as={NextLink} href="/games/ranking">
                                        <Button bgColor={"yellow.400"}>
                                            Click
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                            <Card width={200}>
                                <CardHeader>
                                    <Heading size={"md"}>店舗</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>遊べる全ての店舗を確認する</Text>
                                </CardBody>
                                <CardFooter>
                                    <Button bgColor={"purple.400"}>
                                        Click
                                    </Button>
                                </CardFooter>
                            </Card>
                        </HStack>
                    </Flex>
                    <Card width={"60%"}>
                        <CardHeader>
                            <Heading size="md">最近の勝負</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                                <TransactionItem
                                    name="Kishida"
                                    amount={150000}
                                />
                                <TransactionItem
                                    name="Biden"
                                    amount={-150000}
                                />
                                <TransactionItem
                                    name="Elon"
                                    amount={-40000000}
                                />
                                <TransactionItem
                                    name="Kudou"
                                    amount={40000000}
                                />
                                <TransactionItem
                                    name="Putin"
                                    amount={-5000000000000000}
                                />
                            </Stack>
                        </CardBody>
                    </Card>
                    <Spacer />
                </VStack>
            </BrowserView>
            <MobileView>
                <Heading color={"red.700"}>
                    This page is not allowed for mobile.
                </Heading>
            </MobileView>
        </>
    );
};

export default Page;
