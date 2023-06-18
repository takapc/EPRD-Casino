import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Center,
    HStack,
    Heading,
    Spacer,
    Stack,
    StackDivider,
    VStack,
    useToast,
    Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TransactionItem } from "../componet/TransactionItem";
import { BrowserView } from "react-device-detect";

const endpoint = "http://localhost:8000";

type UserInfo = {
    user_id: string;
    nickname: string;
    having_money: number;
    transaction_history: Transaction[];
};

type Transaction = {
    transaction: string;
    user_id: string;
    dealer_id: string;
    amount: number;
    type: number;
    timestamp: string;
};

const Page = () => {
    const router = useRouter();
    const toast = useToast();
    const { id } = router.query;

    const [userData, setUserData] = useState<UserInfo>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        axios.get(endpoint + "/users/" + id).then((res) => {
            setUserData(res.data);
            setIsLoading(false);
        });
    }, []);

    return (
        <BrowserView>
            <Center>
                <VStack spacing={10}>
                    <Spacer />
                    <Heading>プロフィール</Heading>
                    <Card bgColor={"white"} w={"40vw"}>
                        <CardHeader>
                            <HStack>
                                <Avatar bgColor={"teal.500"} />
                                <Stack>
                                    <Heading color={"gray.700"}>
                                        {userData?.nickname}
                                    </Heading>
                                    <Text size="md">
                                        現在の所持金 : {userData?.having_money}{" "}
                                        DBC
                                    </Text>
                                    <Text size="md"> ID: {id}</Text>
                                </Stack>
                            </HStack>
                        </CardHeader>
                        <CardFooter>
                            <Button
                                isLoading={isLoading}
                                onClick={() => {
                                    setIsLoading(true);
                                    axios
                                        .get(endpoint + "/users/" + id)
                                        .then((res) => {
                                            setIsLoading(false);
                                            setUserData(res.data);
                                            toast({
                                                title: "Reloaded!",
                                                status: "success",
                                                position: "bottom-right",
                                            });
                                        });
                                }}
                                bgColor={"green.300"}
                            >
                                更新する
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card width={"60vw"}>
                        <CardHeader>
                            <Heading size="md">最近の勝負</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                                {userData?.transaction_history.map(
                                    (transaction) => (
                                        <TransactionItem
                                            name={userData?.nickname}
                                            amount={transaction.amount}
                                        />
                                    )
                                )}
                            </Stack>
                        </CardBody>
                    </Card>
                </VStack>
            </Center>
        </BrowserView>
    );
};

export default Page;
