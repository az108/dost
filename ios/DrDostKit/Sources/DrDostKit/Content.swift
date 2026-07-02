import Foundation

public struct SiteContent: Decodable, Hashable, Sendable {
    public let praxis: Praxis
    public let arzt: Arzt
    public let legal: Legal
    public let behandlungen: [Topic]
    public let fachbereiche: [Topic]
    public let galerie: [GalleryImage]
}

public struct Praxis: Decodable, Hashable, Sendable {
    public let brand: String
    public let tagline: String
    public let address: String
    public let phone: String
    public let mobile: String
    public let email: String
    public let hours: String
}

public struct Arzt: Decodable, Hashable, Sendable {
    public let name: String
    public let qualifications: String
    public let intro: [String]
    public let bio: [String]
    public let portrait: String?
}

public struct Legal: Decodable, Hashable, Sendable {
    public let impressum: [String]
    public let datenschutz: [String]
}

public struct Topic: Decodable, Hashable, Identifiable, Sendable {
    public let slug: String
    public let title: String
    public let excerpt: String
    public let body: [String]
    public let image: String?
    public let imageAlt: String?
    public var id: String { slug }
}

public struct GalleryImage: Decodable, Hashable, Identifiable, Sendable {
    public let image: String
    public let alt: String
    public var id: String { image }
}

public enum ContentLoader {
    public static func load(from url: URL) throws -> SiteContent {
        try JSONDecoder().decode(SiteContent.self, from: Data(contentsOf: url))
    }
}

public enum ContactValue {
    /// Placeholder texts like "Telefonnummer folgt" must never become tappable actions.
    public static func isReal(_ value: String) -> Bool {
        let v = value.trimmingCharacters(in: .whitespacesAndNewlines)
        return !v.isEmpty && !v.lowercased().contains("folgt")
    }
}
