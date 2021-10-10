---
id: learn-DOT
title: DOT
sidebar_label: DOT
description: Learn about the tokenomics of the Polkadot ecosystem.
slug: ../learn-DOT
---

## DOT là gì?

DOT là mã thông báo gốc của mạng Polkadot theo cách tương tự như BTC là mã thông báo gốc của Bitcoin
hoặc Ether là mã thông báo gốc của chuỗi khối Ethereum.

Đơn vị tài khoản nhỏ nhất trong mạng Substrate (Polkadot, Kusama, v.v.) là Planck (tham chiếu đến
[Planck Length](https://en.wikipedia.org/wiki/Planck_length), khoảng cách nhỏ nhất có thể có trong
Vũ trụ vật lý). Bạn có thể so sánh Planck với Satoshi hoặc Wei, trong khi DOT giống như bitcoin hoặc
ether. Mã thông báo Kusama (KSM) bằng 1e12 Planck và Polkadot mainnet DOT bằng 1e10 Planck.

### Polkadot

| Unit            | Decimal Places | Example      |
| --------------- | -------------- | ------------ |
| Planck          | 0              | 0.0000000001 |
| Microdot (uDOT) | 4              | 0.0000010000 |
| Millidot (mDOT) | 7              | 0.0010000000 |
| Dot (DOT)       | 10             | 1.0000000000 |
| Million (MDOT)  | 16             | 1,000,000.00 |

> Note: Điều này đã thay đổi ở khối # 1248_328. Trước đây, DOT được mệnh danh là 1e12 Planck, giống
> như Kusama. Mệnh giá này không được dùng nữa và nếu cần, được gọi là "DOT (cũ)". Xem
> [Redenomination of DOT](../general/redenomination.md) để biết thêm chi tiết.

### Kusama

| Unit            | Decimal Places | Example        |
| --------------- | -------------- | -------------- |
| Planck          | 0              | 0.000000000001 |
| Point           | 3              | 0.000000001000 |
| MicroKSM (uKSM) | 6              | 0.000001000000 |
| MilliKSM (mKSM) | 9              | 0.001000000000 |
| KSM             | 12             | 1.000000000000 |

## DOT dùng để làm gì?

DOT phục vụ ba chức năng chính trong Polkadot:

- được sử dụng để quản trị mạng,
- được đặt cọc cho hoạt động của mạng,
- được liên kết để kết nối một chuỗi với Polkadot như một parachain.

DOT cũng có thể phục vụ các chức năng phụ trợ do là một mã thông báo có thể chuyển nhượng. Ví dụ:
DOT được lưu trữ trong Kho bạc có thể được gửi đến các nhóm làm việc trong các dự án liên quan cho
mạng Polkadot.

> Các khái niệm này đã được giải thích kỹ hơn trong video
> [Usage of DOT and KSM on Polkadot and Kusama](https://www.youtube.com/watch?v=POfFgrMfkTo&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=7).

### DOT cho quản trị

Chức năng đầu tiên của DOT là cho phép người nắm giữ quyền kiểm soát việc quản lý nền tảng. Một số
chức năng được bao gồm trong cơ chế quản trị bao gồm xác định phí của mạng, thêm hoặc xóa parachains
và các sự kiện đặc biệt như nâng cấp và sửa lỗi cho nền tảng Polkadot.

Polkadot sẽ cho phép bất kỳ chủ sở hữu DOT nào tham gia quản trị. Để biết chi tiết về cách các chủ
sở hữu có thể tham gia vào quản trị, cũng như các quyền và trách nhiệm của họ, hãy xem
[governance page](learn-governance.md).

### DOT cho sự đồng thuận

DOT sẽ được sử dụng để tạo điều kiện thuận lợi cho cơ chế đồng thuận làm nền tảng cho Polkadot. Để
nền tảng hoạt động và cho phép các giao dịch hợp lệ được thực hiện trên các parachains, Polkadot sẽ
dựa vào những người nắm giữ DOT để đóng vai trò tích cực. Những người tham gia sẽ đặt DOT của họ vào
rủi ro (thông qua đặt cược) để thực hiện các chức năng này. Việc đặt cược DOT hoạt động như một hành
động không khuyến khích đối với những người tham gia ác ý, những người sẽ bị mạng trừng phạt bằng
cách chém DOT của họ. DOT được yêu cầu để tham gia vào mạng sẽ thay đổi tùy thuộc vào hoạt động đang
được thực hiện, thời gian DOT sẽ được đặt cược và tổng số DOT được đặt cược.

### DOT cho Parachain Slot Acquisition

DOT sẽ có khả năng bị khóa trong một khoảng thời gian để đảm bảo một vị trí parachain trong mạng.
DOT sẽ được bảo lưu trong thời gian thuê vị trí và sẽ được trả lại vào tài khoản đã đặt trước chúng
sau khi thời hạn của hợp đồng thuê trôi qua và parachain bị xóa. Bạn có thể tìm hiểu thêm về khía
cạnh này bằng cách đọc về các [auctions](learn-auction.md) quản lý parachain slot.

### Vesting

DOT có thể có một khóa được đặt trên chúng để tài khoản cho các quỹ tranh chấp. Giống như các loại
khóa khác, các khoản tiền này không thể được chuyển nhượng nhưng có thể được sử dụng trong các phần
khác của giao thức như bỏ phiếu trong quản trị hoặc được đặt làm người xác nhận (validator) hoặc
người đề cử (nominator).

Các quỹ ký quỹ theo lịch trình phát hành tuyến tính và mở khóa một số lượng không đổi mã thông báo
tại mỗi khối. Mặc dù các mã thông báo được phát hành theo cách này, nhưng nó không tự động được phản
ánh trên chuỗi vì các ổ khóa là [lazy](#lazy-vesting) và yêu cầu bên ngoài cập nhật.

Có hai cách để tạo lịch biểu.

- Một cách là một phần của cấu hình ban đầu của chuỗi. Trong trường hợp của Polkadot và Kusama, tập
  lệnh khởi tạo đặc điểm kỹ thuật chuỗi đọc trạng thái của hợp đồng Polkadot Claims tồn tại trên
  chuỗi khối Ethereum và tạo lịch trình kiểm tra trong nguồn gốc cho tất cả các phân bổ được đăng ký
  là được cấp.

- Cách thứ hai là thông qua một kiểu bên ngoài có sẵn trong pallet Vesting, `vested_transfer`. Chức
  năng chuyển tiền được cấp cho phép bất kỳ ai cũng có thể tạo lịch biểu giao dịch với việc chuyển
  tiền, miễn là tài khoản mà lịch trình chuyển tiền sẽ được tạo chưa có và việc chuyển tiền sẽ di
  chuyển ít nhất các khoản tiền `MinVestedTransfer`, được chỉ định dưới dạng một chuỗi hằng số.

Lịch biểu làm việc có ba tham số, `locked`, `per_block` và `start_block`. Cấu hình của ba trường này
quy định số tiền bị khóa ban đầu, độ dốc của đường mở khóa và số khối khi bắt đầu mở khóa.

#### Lazy Vesting

Giống [simple payouts](learn-simple-payouts.md), vesting là _lazy_,có nghĩa là ai đó phải gọi một
cách rõ ràng một bên ngoài để cập nhật khóa được đặt trên một tài khoản.

- `vest` extrinsic sẽ cập nhật khóa được đặt trên người gọi.
- `vest_other` sẽ cập nhật khóa được đặt trên quỹ của tài khoản "mục tiêu" khác.

Các extrinsics được thể hiện bởi Vesting pallet.

Nếu bạn đang sử dụng Polkadot-JS, khi có sẵn DOT để cấp cho một tài khoản, thì bạn sẽ có khả năng mở
khóa DOT đã được cấp từ trang [Accounts](https://polkadot.js.org/apps/#/accounts).

![unbond](../assets/unlock-vesting.png)

#### Tính toán khi có vesting DOT

Nói chung, bạn sẽ có thể nhìn thấy từ [Accounts](https://polkadot.js.org/apps/#/accounts) bằng cách
xem xét các tài khoản của mình và biết khi nào quá trình yêu cầu sẽ kết thúc. Tuy nhiên, một số DOT
vest với "vách đá" - một khối duy nhất nơi tất cả các DOT được phát hành, thay vì tranh đua theo
thời gian. Trong trường hợp này, bạn sẽ phải truy vấn trực tiếp trạng thái chuỗi để xem khi nào
chúng sẽ khả dụng (vì về mặt kỹ thuật, việc kiểm tra vẫn chưa bắt đầu - tất cả việc kiểm tra sẽ xảy
ra trong một khối duy nhất trong tương lai).

1. Điều hướng đến trang
   [Chain State](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/chainstate) trên
   Polkadot-JS.
2. Trạng thái chuỗi truy vấn cho `vesting.vesting(ACCOUNT_ID)`
3. Lưu ý `startingBlock` nơi bắt đầu mở khóa và số lượng DOT được mở khóa cho mỗi khối (`perBlock`).
4. Bạn sẽ phải tính kết quả thành “thời gian của con người”. Để làm điều này, hãy nhớ rằng có khoảng
   14’400 khối mỗi ngày và bạn có thể xem khối mới nhất được hiển thị trên trang
   [Explorer](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/explorer).

## Testnet DOT

DOT được yêu cầu để thực hiện các giao dịch trên mạng Polkadot. Testnet DOT không có bất kỳ giá trị
nào ngoài việc cho phép bạn thử nghiệm với mạng.

### Getting Westies

Testnet hiện tại được gọi là [Westend](../maintain/maintain-networks.md#westend-test-network) và bạn
có thể nhận mã thông báo gốc của nó bằng cách đăng`!drip <WESTEND_ADDRESS>` trong phòng trò chuyện
matrix [#westend_faucet:matrix.org](https://matrix.to/#/#westend_faucet:matrix.org).

Bạn cũng có thể tạo WND (testnet DOT) của riêng mình bằng
cách[becoming a validator](learn-validator.md).

Xem video này về cách bắt đầu với Westend
[![Testing Polkadot features on Westend](https://img.youtube.com/vi/0ji0ccZyb3k/0.jpg)](https://www.youtube.com/watch?v=0ji0ccZyb3k)

### Westend

| Unit            | Decimal Places | Example        |
| --------------- | -------------- | -------------- |
| Planck          | 0              | 0.000000000001 |
| Point           | 3              | 0.000000001000 |
| MicroWND (uWND) | 6              | 0.000001000000 |
| MilliWND (mWND) | 9              | 0.001000000000 |
| WND             | 12             | 1.000000000000 |

### Nhận Rococo Tokens

Rococo là một mạng thử nghiệm parachain. Mã thông báo được trao trực tiếp cho các nhóm làm việc trên
parachains hoặc khám phá thông điệp [cross consensus](learn-cross-consensus.md)chuyển các khía cạnh
của mạng thử nghiệm này. Người dùng thông thường có thể nhận ROC bằng cách đăng
`!drip <ROCOCO_ADDRESS>` trong phòng trò chuyện Matrix
[#rococo-faucet:matrix.org](https://matrix.to/#/#rococo-faucet:matrix.org).

Tìm hiểu thêm về Rococo trên
[dedicated wiki section](../build/build-parachains.md##testing-a-parachains:-rococo-testnet) của nó.

## Kusama Tokens

Không giống như testnet DOT, token Kusama không được tặng miễn phí. Mã thông báo Kusama có sẵn thông qua quy trình xác nhận quyền sở hữu ([claims process](https://claim.kusama.network/)) (nếu bạn có DOT vào thời điểm hình thành Kusama) hoặc thông qua [Treasury](learn-treasury.md). Ngoài ra, chúng có thể được mua trên thị trường mở.

## Polkadot Mainnet DOT

Polkadot Mainnet DOT không được tặng miễn phí. Nếu bạn đã mua DOT trong đợt ưu đãi ban đầu năm 2017, bạn có thể yêu cầu chúng thông qua quy trình xác nhận quyền sở hữu Polkadot ([Polkadot claims process](https://claims.polkadot.network/)). Ngoài ra, chúng có sẵn trên thị trường mở.
