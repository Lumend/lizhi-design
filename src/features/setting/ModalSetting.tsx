import { useMemo } from "react"
import { Button, Modal } from "antd"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import LinkInfo from "@/components/common/Info"
import FormLinks from "@/constant/FormLinks"
import { setStatus } from "@/redux/reducer/commonReducerSlice"
import {
  setStatus as setBalanceStatus,
  forAddModal,
} from "@/redux/reducer/umsBalanceReducerSlice"
import { selectMenuList } from "@/redux/reducer/menuReducerSlice"
import "./index.scss"
import {
  MenuOutlined,
  DollarCircleOutlined,
  ContainerOutlined,
  LinkOutlined,
} from "@ant-design/icons"

function ModalLinkInfo() {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const settingStore = useSelector((state: any) => state.setting)
  const storeMenuList = useSelector(selectMenuList)

  let tempFormLinks = useMemo(() => {
    let data = { ...FormLinks }
    let temp: optionItems[] = []
    storeMenuList.forEach((item: any) => {
      temp.push({
        label: item.name,
        value: item.id,
      })
    })
    data.items[2].option = temp

    return data
  }, [storeMenuList])

  const handleOk = () => {}

  const handleCancel = () => {
    dispatch(setStatus({ mdoalFeatureVisiable: false }) as any)
  }

  const list = [
    {
      url: "/common/list/cms_category",
      text: "Menu",
      icon: <MenuOutlined />,
    },
    {
      event: "balance",
      text: "Balance",
      icon: <DollarCircleOutlined />,
    },
    {
      url: "/balance/history",
      text: "Balance History",
      icon: <ContainerOutlined />,
    },
    {
      event: "recharge",
      text: "Recharge",
      icon: <LinkOutlined />,
    },
  ]

  const showBalance = () => {
    dispatch(
      setBalanceStatus({
        mdoalOverviewVisiable: true,
      })
    )
  }

  const showRecharge = () => {
    dispatch(
      setBalanceStatus({
        mdoalRechargeVisiable: true,
      })
    )
  }

  const handleClickItem = (item: any) => {
    console.log(item)

    if (item.url) {
      navigate(item.url)
    }

    if (item.event) {
      switch (item.event) {
        case "balance":
          showBalance()
          break
        case "recharge":
          showRecharge()
          break

        default:
          break
      }
    }

    handleCancel()
  }

  const renderList = () => {
    let temp: any = []
    list.forEach((item) => {
      temp.push(
        <li onClick={() => handleClickItem(item)}>
          {item.icon}
          <span>{item.text}</span>
        </li>
      )
    })
    return temp
  }

  return (
    <Modal
      title="Setting"
      visible={settingStore.status.mdoalFeatureVisiable}
      onOk={handleOk}
      confirmLoading={settingStore.status.confirmLoading}
      onCancel={handleCancel}
      footer={null}
    >
      <div className="modal-setting-feature-list">
        <ul className="table">{renderList()}</ul>
      </div>
    </Modal>
  )
}

export default ModalLinkInfo
