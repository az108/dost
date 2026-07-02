package de.silvamed.drdost.content

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

@Serializable
data class SiteContent(
    val praxis: Praxis,
    val arzt: Arzt,
    val legal: Legal,
    val behandlungen: List<Topic>,
    val fachbereiche: List<Topic>,
    val galerie: List<GalleryImage>,
)

@Serializable
data class Praxis(
    val brand: String,
    val tagline: String,
    val address: String,
    val phone: String,
    val mobile: String,
    val email: String,
    val hours: String,
)

@Serializable
data class Arzt(
    val name: String,
    val qualifications: String,
    val intro: List<String>,
    val bio: List<String>,
    val portrait: String? = null,
)

@Serializable
data class Legal(
    val impressum: List<String>,
    val datenschutz: List<String>,
)

@Serializable
data class Topic(
    val slug: String,
    val title: String,
    val excerpt: String,
    val body: List<String>,
    val image: String? = null,
    val imageAlt: String? = null,
)

@Serializable
data class GalleryImage(
    val image: String,
    val alt: String,
)

object ContentLoader {
    private val json = Json { ignoreUnknownKeys = true }
    fun parse(text: String): SiteContent = json.decodeFromString(text)
}

object ContactValue {
    /** Placeholder texts like "Telefonnummer folgt" must never become tappable actions. */
    fun isReal(value: String): Boolean {
        val v = value.trim()
        return v.isNotEmpty() && !v.lowercase().contains("folgt")
    }
}
