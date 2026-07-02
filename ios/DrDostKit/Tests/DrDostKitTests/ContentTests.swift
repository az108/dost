import XCTest
@testable import DrDostKit

final class ContentTests: XCTestCase {
    // ios/DrDostKit/Tests/DrDostKitTests/ContentTests.swift -> repo root is 5 levels up
    private var sharedJSONURL: URL {
        URL(fileURLWithPath: #filePath)
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .appendingPathComponent("shared/content.json")
    }

    func testDecodesSharedContentJSON() throws {
        let content = try ContentLoader.load(from: sharedJSONURL)
        XCTAssertEqual(content.praxis.brand, "Dr. Dost")
        XCTAssertEqual(content.behandlungen.count, 11)
        XCTAssertEqual(content.fachbereiche.count, 8)
        XCTAssertEqual(content.galerie.count, 8)
        XCTAssertEqual(content.arzt.portrait, "arzt-portrait.jpg")
        XCTAssertEqual(content.behandlungen.first?.image, "topics/allergiebehandlung.jpg")
        XCTAssertFalse(content.legal.impressum.isEmpty)
    }

    func testPlaceholderValuesAreNotReal() {
        XCTAssertFalse(ContactValue.isReal("Telefonnummer folgt"))
        XCTAssertFalse(ContactValue.isReal("Adresse folgt"))
        XCTAssertFalse(ContactValue.isReal("   "))
        XCTAssertTrue(ContactValue.isReal("dr.dost@silvamed.de"))
        XCTAssertTrue(ContactValue.isReal("+49 871 123456"))
    }
}
