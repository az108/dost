// swift-tools-version: 5.10
import PackageDescription

let package = Package(
    name: "DrDostKit",
    platforms: [.iOS(.v17), .macOS(.v14)],
    products: [.library(name: "DrDostKit", targets: ["DrDostKit"])],
    targets: [
        .target(name: "DrDostKit"),
        .testTarget(name: "DrDostKitTests", dependencies: ["DrDostKit"]),
    ]
)
