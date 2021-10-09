---
id: learn-launch
title: Polkadot Launch Phases
sidebar_label: Polkadot Launch Phases
description: An explanation of Polkadot's launch process and its individual phases.
slug: ../learn-launch
---

Mạng Polkadot có kế hoạch triển khai theo từng giai đoạn, với các mốc quan trọng hướng tới phân cấp đánh dấu từng giai đoạn. Cập nhật kế hoạch triển khai theo từng giai đoạn của Polkadot tại bằng cách xem
[roadmap](https://polkadot.network/launch-roadmap/)

**Giai đoạn hiện tại: Parachain Rollout**

## Khởi chạy PoA

Khối Genesis của mạng Polkadot được khởi chạy vào ngày 26 tháng 5 năm 2020, như một mạng Proof of Authority (PoA). Tính năng quản trị bị hạn chế đối với khóa Sudo (siêu người dùng) duy nhất, do Web3 Foundation nắm giữ để đưa ra các lệnh và nâng cấp cần thiết để hoàn tất quá trình khởi chạy. Trong thời gian này, người xác nhận bắt đầu tham gia mạng và báo hiệu ý định tham gia đồng thuận của họ.

## Nominated Proof of Stake

Khi Web3 Foundation tin tưởng vào sự ổn định của mạng và có đủ số lượng người xác nhận ý định, Web3 Foundation đã sử dụng [Sudo](https://youtu.be/InekMjJpVdo) &mdash; một tài khoản superuser có quyền truy cập vào các chức năng quản trị - để bắt đầu cuộc bầu cử người xác thực đầu tiên. Sau cuộc bầu cử này, mạng chuyển đổi từ PoA sang giai đoạn thứ hai, [Nominated Proof of Stake (NPoS)](learn-staking.md), vào ngày 18 tháng 6 năm 2020.


## Governance

Sau khi chuỗi hoạt động tốt với bộ trình xác thực, khóa Sudo đã đưa ra bản nâng cấp thời gian chạy cho phép bộ mô-đun quản trị trong Polkadot; cụ thể là các mô-đun để cho phép [Hội đồng](learn-governance.md#council), [Ủy ban kỹ thuật](learn-governance.md#technical-committee) và [cuộc trưng cầu ý kiến công khai](learn-governance.md#public-referenda).


## Removal of Sudo
Mô-đun Sudo đã bị loại bỏ bởi bản nâng cấp thời gian chạy vào ngày 20 tháng 7 năm 2020, chuyển [quyền quản lý](learn-governance.md) chuỗi vào tay của những người nắm giữ mã thông báo (DOT).

Kể từ thời điểm này, mạng lưới đã hoàn toàn nằm trong tay của những người nắm giữ mã thông báo và không còn chịu sự kiểm soát của bất kỳ cơ quan quản lý tập trung nào.

## Balance Transfers
Để cho phép chuyển số dư, cộng đồng đã đưa ra [một đề xuất công khai](../maintain/maintain-guides-democracy.md) về việc nâng cấp thời gian chạy nhằm dỡ bỏ hạn chế chuyển số dư. Sau đó, chức năng chuyển đã được bật trên Polkadot tại khối số 1_205_128 vào ngày 18 tháng 8 năm 2020, lúc 16:39 UTC.

## Redenomination
Vào ngày 21 tháng 8 năm 2020, việc [xác định lại DOT](../general/redenomination.md), mã thông báo gốc trên Polkadot, đã xảy ra. Kể từ ngày này, một DOT (cũ) bằng 100 DOT mới.

## Core Functionality
Polkadot hiện đang chuyển sang giai đoạn tiếp theo là mở ra chức năng cốt lõi của nó, như đấu giá vị trí parachain, parathreads và truyền thông điệp chuỗi chéo. Polkadot hiện đang trên đà ra mắt một số parachains vào năm 2021. Những nâng cấp này sẽ yêu cầu nâng cấp thời gian chạy sẽ thông qua các quy trình quản trị thông thường của Polkadot. Chức năng cốt lõi không phải được mở khóa tuần tự &mdash; một số tính năng có thể được mở khóa bằng một đề xuất duy nhất.

Parachains đầu tiên sẽ triển khai trên Kusama với một parachain thông dụng, tiếp theo là đấu giá vị trí đầu tiên và giới thiệu người chiến thắng.

## Polkadot 2.0

Các nhà nghiên cứu đang trong quá trình nghiên cứu phiên bản tiếp theo của mạng Polkadot. Với nhiều câu hỏi chưa được trả lời, cho đến nay, một số lĩnh vực nghiên cứu lớn:

- Kinh tế và Mạng (Zero-Knowledge): Khả năng mở rộng sẽ hoạt động như thế nào trong Polkadot 2.0?
- Khả năng mở rộng theo chiều ngang vs chiều dọc: Điểm phá vỡ của số lượng parachains tối đa được xây dựng với khả năng mở rộng theo chiều ngang là gì?
- Chuỗi chuyển tiếp lồng nhau: Làm thế nào để nhiều Chuỗi chuyển tiếp tồn tại được kết nối thông qua các parachains? Có bao nhiêu bậc của Chuỗi chuyển tiếp có thể được lồng vào nhau? Trình xác thực sẽ làm việc cùng nhau như thế nào để xác thực các khối trên các Chuỗi chuyển tiếp khác nhau? [XCM](learn-cross-consensus.md) hoạt động như thế nào trong thiết lập lồng nhau? [AnV](learn-availability.md) sẽ làm việc ở đó như thế nào?
