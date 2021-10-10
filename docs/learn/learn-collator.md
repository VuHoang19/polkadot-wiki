---
id: learn-collator
title: Collator
sidebar_label: Collator
description: Learn about how collators maintain the network.
slug: ../learn-collator
---

Collators (trình đối chiếu hay người đối chiếu) duy trì parachains bằng cách thu thập các giao dịch parachain từ người dùng và tạo bằng chứng chuyển đổi trạng thái cho trình xác thực Relay chain. Nói cách khác, các nhà đối chiếu duy trì các parachains bằng cách tổng hợp các giao dịch parachain thành các ứng cử viên khối parachain và tạo ra các bằng chứng chuyển đổi trạng thái cho các trình xác thực dựa trên các khối đó.

Collators duy trì một nút đầy đủ cho Relay chain và một nút đầy đủ cho parachain cụ thể của chúng; có nghĩa là họ giữ lại tất cả thông tin cần thiết để có thể tạo ra các khối mới và thực hiện các giao dịch giống như cách mà các thợ đào làm trên các blockchain PoW hiện tại. Trong các trường hợp bình thường, họ sẽ đối chiếu và thực hiện các giao dịch để tạo ra một khối chưa được niêm phong và cung cấp nó, cùng với bằng chứng chuyển đổi trạng thái, cho một hoặc nhiều trình xác thực chịu trách nhiệm đề xuất một khối parachain.

Không giống như trình xác thực, các nút đối chiếu không bảo mật mạng. Nếu một khối parachain không hợp lệ, nó sẽ bị trình xác nhận từ chối. Do đó, giả định rằng có nhiều máy đối chiếu là tốt hơn hoặc an toàn hơn là không đúng. Ngược lại, quá nhiều đối tác có thể làm chậm mạng. Những kẻ cấu kết quyền lực bất chính duy nhất có là kiểm duyệt giao dịch. Để ngăn chặn kiểm duyệt, parachain chỉ cần đảm bảo rằng tồn tại một số đối tác trung lập - nhưng không nhất thiết phải là đa số. Về mặt lý thuyết, vấn đề kiểm duyệt được giải quyết khi chỉ có một trình đối chiếu trung thực.

### XCM

Trình đối chiếu là yếu tố chính của
[XCM (Cross-Consensus Message Passing Format)](learn-cross-consensus.md).
Bằng cách là các nút đầy đủ của Relay chain, tất cả chúng đều nhận thức được nhau như các đồng nghiệp. Điều này giúp họ có thể gửi tin nhắn từ parachain A đến parachain B.

## Lấy trường hợp cho một Parachain

Bắt đầu một ứng cử viên khối mới được bắt đầu với thời gian tạo khối. Trình đối chiếu tổng hợp tất cả các giao dịch mới vào cuối quá trình. Khi làm như vậy, trình đối chiếu ký tên vào ứng cử viên khối parachain và tạo ra bằng chứng chuyển đổi trạng thái, là bản tóm tắt về số dư tài khoản cuối cùng do các giao dịch trong khối ứng cử viên gây ra. Trình đối chiếu chuyển tiếp khối ứng cử viên và các bằng chứng chuyển đổi trạng thái tới trình xác thực trên chuỗi. Trình xác thực xác minh các giao dịch trong ứng cử viên khối parachain. Sau khi xác minh và nếu tất cả đều ổn, trình xác thực chia sẻ khối ứng viên với Relay chain.

Các ứng cử viên khối Parachain được thu thập cùng nhau và một ứng viên khối Relay được tạo ra.

![parachain candidate block diagram](../assets/polkadot-consensus-example-1.png)

Người xác nhận trên mạng sẽ cố gắng đạt được sự đồng thuận về ứng cử viên khối Relay chain. Sau khi đạt được sự đồng thuận, ứng cử viên khối Relay chain hiện đã được xác thực sẽ được chia sẻ với những người xác nhận và đối chiếu và quá trình lặp lại cho các giao dịch mới. Người đối chiếu không thể tiếp tục xây dựng khối trên parachain cho đến khi ứng viên khối mà họ đề xuất với trình xác thực Relay chain đã được xác thực.

![relay chain candidate block diagram](../assets/polkadot-consensus-example-2.png)

Cứ 6 giây lại có một khối được tạo ra.

## Collators in the Wild

Các blockchains được xây dựng bằng Substrate không thể tự gắn vào Relay chain. Nhóm Parity đã xây dựng [Cumulus library](https://github.com/paritytech/cumulus/) để giải quyết vấn đề này.
Collators đang được sử dụng trên [Rococo](../build/build-parachains.md##testing-a-parachains:-rococo-testnet) testnet, và bạn có thể tìm hiểu thêm về cách chúng được sử dụng với Cumulus thông qua [Cumulus](https://github.com/paritytech/cumulus/)
repository. Thông tin thêm có thể được tìm thấy trong [Cumulus section](../build/build-parachains.md###cumulus) trên trang build parachain xây dựng.

## Guides and Tools

- [Workshop covering Cumulus and Collators](https://substrate.dev/cumulus-workshop/)
- [Rococo tesnet guide](../build/build-parachains.md##testing-a-parachains:-rococo-testnet)
- [polkadot-launch](https://github.com/shawntabrizi/polkadot-launch) - một công cụ để nhanh chóng tạo ra một mạng thử nghiệm Polkadot cục bộ dựa trên một số thông số như số lượng parachains, thiết lập đối chiếu, v.v.
