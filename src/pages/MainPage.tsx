import styled from "styled-components"
import { Colors } from "../style/colors"
import LoudLoudBoy from "../components/main/LoudLoudBoy"
import List from "../components/main/List"
import { IoAdd } from "react-icons/io5"
import { IoMdExit } from "react-icons/io"
import CheckModal from "../components/main/CheckModal"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TiPlus } from "react-icons/ti"

function MainPage() {
    const navigate = useNavigate()
    const [delModalShow, setDelModalShow] = useState<Boolean>(false)
    const [logoutModal, setLogoutModal] = useState<Boolean>(false)
    const [editModal, setEditModal] = useState<Boolean>(false)
    const [addListModal, setAddListModal] = useState<Boolean>(false)
    const [addLoudBoy, setAddLoudBoy] = useState<Boolean>(false)

    const Lists = [
        {
            time: "2024/09/20/15:00",
            title: "마감하기",
            content: "DoW 프로젝트 퍼블리싱 하기",
        },
        {
            time: "2024/10/17/21:30",
            title: "연동시작하기",
            content: "프로젝트 연동 시작하기",
        },
        {
            time: "2024/10/18/17:00",
            title: "영상촬영하기",
            content: "프로젝트 시연 영상 촬영해서 제출하기",
        },
        {
            time: "2024/10/24/10:30",
            title: "자료구조 수행하기",
            content: "자료 구조 수행하기 스택/큐 뭐시기뭐시기들",
        },
        {
            time: "2024/10/24/12:30",
            title: "과학 수행하기",
            content: "교실 일찍 가서 테스트 하기",
        },
    ]

    const delModalToggleHandler = () => {
        setDelModalShow(!delModalShow)
    }

    const logoutModalToggleHandler = () => {
        setLogoutModal(!logoutModal)
    }

    const logoutHandler = () => {
        setDelModalShow(!logoutModal)
        navigate("/")
    }

    const editModalToggleHandler = () => {
        setEditModal(!editModal)
    }

    const addListModalToggleHandler = () => {
        setAddListModal(!addListModal)
    }

    const addLoudboyToggleHandler = () => {
        setAddLoudBoy(!addLoudBoy)
    }

    return (
        <>
            {delModalShow && (
                <CheckModal
                    title="삭제하시겠습니까?"
                    subtitle="삭제하시면 다시 복구할 수 없습니다."
                    check={delModalToggleHandler}
                    close={delModalToggleHandler}
                />
            )}
            {logoutModal && (
                <CheckModal
                    title="로그아웃하시겠습니까?"
                    check={logoutHandler}
                    close={logoutModalToggleHandler}
                />
            )}
            {editModal && (
                <CheckModal
                    type="input"
                    check={editModalToggleHandler}
                    close={editModalToggleHandler}
                    button="수정"
                />
            )}
            {addListModal && (
                <CheckModal
                    type="input"
                    check={addListModalToggleHandler}
                    close={addListModalToggleHandler}
                    button="추가"
                />
            )}
            {addLoudBoy && (
                <CheckModal
                    type="connect"
                    check={addLoudboyToggleHandler}
                    close={addLoudboyToggleHandler}
                    button="확인"
                />
            )}

            <Background>
                <LeftBar>
                    <ProfileContainer>
                        <ProfileWrapper>
                            <Profile />

                            <LogOut onClick={logoutModalToggleHandler}>
                                <IoMdExit />
                            </LogOut>
                        </ProfileWrapper>
                        <GroupName>대덕소프트웨어마이스터고등학교</GroupName>
                        <Explain>남은 일정 개수 : 8</Explain>
                        <Explain>연결된 기기 수 : 4</Explain>
                    </ProfileContainer>

                    <ConnectContainer>
                        <ConnectTitle>연결된 기기</ConnectTitle>
                        <ConnectWrapper>
                            <LoudLoudBoy
                                name="Hamster1"
                                onClickDel={delModalToggleHandler}
                            />
                            <LoudLoudBoy
                                name="Hamster2"
                                onClickDel={delModalToggleHandler}
                            />
                            <LoudLoudBoy
                                name="Hamster3"
                                onClickDel={delModalToggleHandler}
                            />
                            <LoudLoudBoy
                                name="Gangster1"
                                onClickDel={delModalToggleHandler}
                            />
                            <AddLoudBoy onClick={addLoudboyToggleHandler}>
                                <IoAdd />
                            </AddLoudBoy>
                        </ConnectWrapper>
                    </ConnectContainer>
                </LeftBar>

                <Container>
                    <ListTitle>
                        일정 목록
                        <AddList onClick={addListModalToggleHandler}>
                            <TiPlus />
                        </AddList>
                    </ListTitle>
                    <ListContainer>
                        {Lists.map((v) => {
                            return (
                                <List
                                    name={v.title}
                                    date={v.time}
                                    explain={v.content}
                                    onClickEdit={editModalToggleHandler}
                                    onClickDel={delModalToggleHandler}
                                />
                            )
                        })}
                    </ListContainer>
                </Container>
            </Background>
        </>
    )
}

export default MainPage

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: ${Colors.White};
    /* display: flex;
    justify-content: center;
    align-items: center; */
`

const LeftBar = styled.div`
    width: 320px;
    height: 100vh;
    background: ${Colors.Gray100};
    border-radius: 0 10px 10px 0;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    position: fixed;
    gap: 50px;
`

const ProfileContainer = styled.div`
    width: 85%;
    display: flex;
    justify-content: start;
    align-items: left;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
`

const Profile = styled.div`
    width: 100px;
    height: 100px;
    background: ${Colors.Gray500};
    border-radius: 10px;
`

const GroupName = styled.p`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.Gray800};
`

const Explain = styled.p`
    width: 100%;
    font-size: 18px;
    color: ${Colors.Black};
`

const ConnectContainer = styled.div`
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const ConnectTitle = styled.div`
    width: 100%;
    font-size: 20px;
    padding: 10px 0;
    font-weight: bold;
    color: ${Colors.Gray500};
    border-bottom: 1px solid ${Colors.Gray300};
`

const ConnectWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`

const Container = styled.div`
    position: absolute;
    left: 310px;
    width: 1200px;
    height: 100vh;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`

const ListTitle = styled.div`
    width: 90%;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    padding: 10px 5px;
    color: ${Colors.Gray500};
    border-bottom: 1px solid ${Colors.Gray300};
`

const AddList = styled.p`
    margin-left: auto;
    font-size: 24px;
    color: ${Colors.Gray500};
    cursor: pointer;
`

const ListContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const AddLoudBoy = styled.div`
    width: 100%;
    height: 40px;
    background: ${Colors.Gray200};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: ${Colors.Gray500};
    transition: 300ms;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background: ${Colors.Gray300};
    }
`

const ProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
`

const LogOut = styled.p`
    width: 34px;
    height: 34px;
    margin-left: auto;
    font-size: 30px;
    color: ${Colors.Gray400};
    cursor: pointer;
    transition: 200ms;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: ${Colors.Gray200};
    }
`
