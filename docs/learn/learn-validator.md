---
id: learn-validator
title: Validator
sidebar_label: Validator
description: An introduction about validators.
slug: ../learn-validator
---

Người xác thực bảo mật [Relay Chain](learn-architecture.md#relay-chain) bằng cách đặt cược DOT, xác
thực bằng chứng từ những người đối chiếu (collator) và tham gia đồng thuận với những người xác nhận
khác.

Những người tham gia này đóng một vai trò quan trọng trong việc thêm các khối mới vào Relay chain và
mở rộng ra là cho tất cả các phân đoạn. Điều này cho phép các bên hoàn thành các giao dịch xuyên
chuỗi thông qua Chuỗi chuyển tiếp. Trình xác thực Parachain tham gia vào một số hình thức đồng thuận
ngoài chuỗi và gửi biên nhận ứng viên đến nhóm tx để nhà sản xuất khối đưa vào chuỗi. Trình xác thực
Relay chain đảm bảo rằng mỗi parachain tuân theo các quy tắc duy nhất của nó và có thể truyền thông
điệp giữa các phân đoạn trong một môi trường không tin cậy.

Trình xác thực thực hiện hai chức năng:

1. **Verifying** Xác minh rằng thông tin có trong một tập hợp các khối parachain được chỉ định là
   hợp lệ (chẳng hạn như danh tính của các bên giao dịch và đối tượng của hợp đồng).
2. **Participating** Tham gia vào cơ chế đồng thuận để tạo ra các khối Chuỗi chuyển tiếp dựa trên
   các tuyên bố hợp lệ từ các trình xác nhận khác. Bất kỳ trường hợp nào không tuân thủ các thuật
   toán đồng thuận đều dẫn đến việc bị trừng phạt bằng cách xóa một số hoặc tất cả DOT của trình xác
   thực, do đó không khuyến khích các tác nhân xấu. Tuy nhiên, hiệu suất tốt sẽ được thưởng, với
   những người xác nhận nhận được phần thưởng khối (bao gồm phí giao dịch) dưới dạng DOT để đổi lấy
   các hoạt động của họ.

## Hướng dẫn

- [How to Validate on Polkadot](../maintain/maintain-guides-how-to-validate-polkadot.md) - Hướng dẫn
  cách thiết lập trình xác thực trên mạng trực tiếp Polkadot.
- [Validator Payout Overview](../maintain/maintain-guides-validator-payout.md) - Tổng quan ngắn gọn
  về cách hoạt động của cơ chế thanh toán của trình xác thực.
- [How to run your validator as a systemd process](../maintain/maintain-guides-how-to-systemd.md) -
  Hướng dẫn chạy trình xác nhận của bạn dưới dạng quy trình systemd để nó sẽ chạy ở chế độ nền và tự
  động bắt đầu khi khởi động lại.
- [How to Upgrade your Validator](../maintain/maintain-guides-how-to-upgrade.md) - Hướng dẫn nâng
  cấp trình xác thực một cách an toàn khi bạn muốn chuyển sang một máy khác hoặc bắt đầu chạy phiên
  bản mã ứng dụng khách mới nhất.
- [How to Use Validator Setup](../maintain/maintain-guides-how-to-use-polkadot-validator-setup.md) -
  Hướng dẫn cách sử dụng thiết lập trình xác thực Polkadot / Kusama.

## Tài liệu tham khảo khác

- [How to run a Polkadot node (Docker)](https://medium.com/@acvlls/setting-up-a-maintain-the-easy-way-3a885283091f)
- [A Serverless Failover Solution for Web3.0 Validator Nodes](https://medium.com/hackernoon/a-serverless-failover-solution-for-web-3-0-validator-nodes-e26b9d24c71d) -
  Blog hướng dẫn chi tiết cách tạo giải pháp chuyển đổi dự phòng mạnh mẽ để chạy trình xác thực.
- [VPS list](../maintain/kusama/maintain-guides-how-to-validate-kusama.md##vps-list)
- [Polkadot Validator Lounge](https://matrix.to/#/!NZrbtteFeqYKCUGQtr:matrix.parity.io?via=matrix.parity.io&via=matrix.org&via=web3.foundation) -
  Nơi trò chuyện về việc trở thành người xác nhận.
- [Slashing Consequences](learn-staking#slashing) - Tìm hiểu thêm về hệ quả của việc cắt giảm khi
  chạy một nút trình xác thực.
- [Why You Should be A Validator on Polkadot and Kusama](https://www.youtube.com/watch?v=0EmP0s6JOW4&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=2)
- [Roles and Responsibilities of a Validator](https://www.youtube.com/watch?v=riVg_Up_fCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=15)
- [Validating on Polkadot](https://www.crowdcast.io/e/validating-on-polkadot) - Giải thích về cách
  xác thực trên Polkadot, với Joe Petrowski và David Dorgan của Parity Technologies, cùng với Tim
  Ogilvie từ Staked.

## Bảo mật / Quản lý khóa

- [Validator Security Overview](https://github.com/w3f/validator-security)

## Công cụ giám sát

- [PANIC for Polkadot](https://github.com/SimplyVC/panic_polkadot) - Một giải pháp giám sát và cảnh
  báo cho nút Polkadot / Kusama
- [Polkadot Telemetry Service](https://telemetry.polkadot.io/#list/Kusama%20CC3) - Thông tin mạng,
  bao gồm những nút nào đang chạy trên một chuỗi nhất định, phiên bản phần mềm nào chúng đang chạy
  và trạng thái đồng bộ hóa.
- [Other Useful Links](https://forum.web3.foundation/t/useful-links-for-validators/20)

## Thống kê Trình xác thực

- [HashQuark Staking Strategy](https://polkacube.hashquark.io/#/polkadot/strategy) - Bảng điều khiển
  chiến lược đặt cược HashQuark giúp bạn chọn thiết lập tối ưu để tối đa hóa phần thưởng và cung cấp
  các công cụ giám sát mạng hữu ích khác.
- [Polkastats](https://polkastats.io/) - Polkastats là một trang tổng quan được thiết kế gọn gàng để
  thống kê trình xác thực.
- [YieldScan](https://yieldscan.app/) - Nền tảng tối đa hóa năng suất cố định, được thiết kế để giảm
  thiểu nỗ lực.
- [Subscan Validators Page](https://kusama.subscan.io/validator) - Hiển thị thông tin về các trình
  xác thực hiện tại - không được thiết kế riêng cho các trình xác thực như các trang khác.
