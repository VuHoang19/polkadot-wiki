---
id: learn-architecture
title: Architecture
sidebar_label: Architecture
description: Learn about the key components to Polkadot's Architecture.
slug: ../learn-architecture
---

Polkadot là một multichain không đồng nhất với khả năng tương tác và bảo mật được chia sẻ.
# Components

## Relay chain

Relay chain là chuỗi trung tâm của Polkadot. Tất cả các trình xác nhận (validator) của Polkadot đều được đặt trên Relay chain trong DOT và xác nhận cho Relay chain. Relay chain bao gồm một số lượng tương đối nhỏ các loại giao dịch bao gồm các cách tương tác với cơ chế quản trị, đấu giá parachain và tham gia vào NPoS. Relay chain có chức năng tối thiểu một cách cố ý - ví dụ: hợp đồng thông minh không được hỗ trợ. Trách nhiệm chính là điều phối toàn bộ hệ thống, bao gồm cả các parachains. Các công việc cụ thể khác được giao cho các parachains, có các cách triển khai và tính năng khác nhau.

## [Parachain](learn-parachains.md) and [Parathread](learn-parathreads.md) Slots

Polkadot có thể hỗ trợ một số slot thực thi. Các slot cắm này giống như các core trên bộ xử lý của máy tính (ví dụ: bộ xử lý của máy tính xách tay hiện đại có thể có tám core). Mỗi một trong những core này có thể chạy một quy trình tại một thời điểm. Polkadot cho phép các slot này sử dụng hai mô hình đăng ký: parachains và parathreads. Parachains có một slot cắm dành riêng (core) cho chuỗi của họ và giống như một quá trình chạy liên tục. Parathreads chia sẻ các vị trí giữa một nhóm và do đó giống như các quy trình cần được đánh thức và chạy ít thường xuyên hơn.

Hầu hết việc tính toán xảy ra trên toàn bộ mạng Polkadot sẽ được ủy quyền cho các triển khai parachain hoặc parathread cụ thể xử lý các trường hợp sử dụng khác nhau. Polkadot không có ràng buộc nào đối với những gì parachains có thể làm ngoài việc chúng phải có khả năng tạo ra một bằng chứng có thể được xác thực bởi các trình xác thực được chỉ định cho parachain. Bằng chứng này xác minh sự chuyển đổi trạng thái của parachain. Một số parachains có thể dành riêng cho một ứng dụng cụ thể, những người khác có thể tập trung vào các tính năng cụ thể như hợp đồng thông minh, quyền riêng tư hoặc khả năng mở rộng &mdash; tuy nhiên, những người khác có thể là kiến ​​trúc thử nghiệm không nhất thiết phải là blockchain.

Polkadot cung cấp nhiều cách để đảm bảo vị trí cho một vị trí parachain trong một khoảng thời gian cụ thể. Parathreads là một phần của nhóm chia sẻ các vị trí và đấu giá phải thắng cho các khối riêng lẻ. Parathreads và parachains có cùng một API; sự khác biệt của họ là kinh tế. Parachains sẽ phải đặt trước DOT trong suốt thời gian thuê chỗ của họ; parathreads sẽ thanh toán trên cơ sở mỗi khối. Parathreads có thể trở thành parachains và ngược lại.

### [Bảo mật chia sẻ](learn-security.md)

Các Parachains được kết nối với Relay chain Polkadot đều có chung quyền bảo mật với Relay chain. Polkadot có trạng thái được chia sẻ giữa Relay chain và tất cả các parachains được kết nối. Nếu Relay chain phải hoàn nguyên vì bất kỳ lý do gì, thì tất cả các chuỗi phân đoạn cũng sẽ hoàn nguyên. Điều này là để đảm bảo rằng hiệu lực của toàn bộ hệ thống có thể tồn tại và không có phần riêng lẻ nào bị hỏng.

Trạng thái được chia sẻ làm cho các giả định tin cậy khi sử dụng các parachains Polkadot chỉ là các giả định của bộ xác thực Relay chain và không có giả định nào khác. Vì trình xác thực(validator) được đặt trên Relay chain dự kiến sẽ được bảo mật với một lượng lớn tiền đặt cọc để hỗ trợ nó, các parachains sẽ được hưởng lợi từ bảo mật này.

## [Bridges](learn-bridges.md)
Blockchain [bridge](../general/glossary.md##bridge) là một kết nối cho phép truyền dữ liệu tùy ý từ mạng này sang mạng khác. Các chuỗi này có thể tương tác thông qua cầu nối nhưng có thể tồn tại dưới dạng các chuỗi độc lập với các giao thức, quy tắc và mô hình quản trị khác nhau. Trong Polkadot, các cầu nối với Relay chain và được bảo đảm thông qua cơ chế đồng thuận Polkadot, được duy trì bởi [collators](##collators).

Polkadot sử dụng các cầu nối để làm cầu nối cho tương lai của Web 3.0, vì các cầu nối là nền tảng cho kiến trúc tương thích của Polkadot bằng cách hoạt động như một kênh giao tiếp [an toàn và mạnh mẽ] cho các chuỗi riêng biệt.

# Những thành phần chính

## Validators

[Validators](../general/glossary.md##validator), nếu được chọn vào tập hợp trình xác nhận, sẽ tạo ra các khối trên Relay chain. Họ cũng chấp nhận các bằng chứng về sự chuyển đổi trạng thái hợp lệ từ các máy đối chiếu (collators). Đổi lại, họ sẽ nhận được phần thưởng đặt cược.

## Nominators

[Nominators](../general/glossary.md##nominator)(người được để cử) liên kết cổ phần của họ với các trình xác thực cụ thể để giúp họ tham gia vào tập hợp trình xác thực đang hoạt động và do đó tạo ra các khối cho chuỗi. Đổi lại, những người được đề cử thường được thưởng bằng một phần phần thưởng đặt cược từ người xác nhận đó.

## Collators

[Collators](../general/glossary.md##collator) là các full node trên cả parachain và Relay chain. Họ thu thập các giao dịch parachain và tạo ra các bằng chứng chuyển đổi trạng thái cho các trình xác thực trên Relay chain. Họ cũng có thể gửi và nhận tin nhắn từ các parachains khác bằng XCMP.

---

## Whiteboard Series

Để có video tổng quan về kiến trúc của Polkadot, hãy xem video dưới đây về cuộc phỏng vấn bảng trắng với nhà nghiên cứu Alistair Stewart của W3F:

<iframe width="560" height="315" src="https://www.youtube.com/embed/xBfC6uTjvbM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
